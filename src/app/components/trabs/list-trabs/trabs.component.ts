import { DataSource } from '@angular/cdk/collections';
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { map, Observable, startWith } from 'rxjs';
import { Work } from 'src/app/models/Work';
import { TrabsService } from '../../../services/trabs.service';

@Component({
  selector: 'app-trabs',
  templateUrl: './trabs.component.html',
  styleUrls: ['./trabs.component.scss']
})
export class TrabsComponent implements OnInit {

  works: Work[] = [];


  // Pagination
  pagedList: Work[]= [];
  pageEvent : PageEvent | undefined;
  length: number = 0;
  itemPages : number = 5;
  // ----------------------->

  //AUTOCOMPLETE
  autoCompleteInput = new FormControl();
  optionsWorks: string[] = [];
  NamesWorks: Observable<string[]> | undefined;
  // ------------------------------->


  // isAdm: boolean | undefined;;



  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort

  constructor(private TrabsService: TrabsService, private dialog: MatDialog) { }

  ngOnInit(): void {

    this.TrabsService.GetAll().subscribe((result) => {
      result.forEach((works) => {
        this.optionsWorks.push(works.name as string);
      });

      this.works = result;
      this.length = result.length;
    
      this.pagedList = this.works.slice(0, this.itemPages);
    });

    this.NamesWorks = this.autoCompleteInput.valueChanges.pipe(startWith(''), map(name => this.FilterNames(name)));
  }

  onPaginateChange(event : PageEvent){
    let startIndex = event.pageIndex * event.pageSize;
    this.itemPages = startIndex + event.pageSize;
    if(this.itemPages > this.length){
      this.itemPages = this.length;
    }
    this.pagedList = this.works.slice(startIndex, this.itemPages);
  }


  FilterNames(name: string): string[] {
    if (name.trim().length >= 3) {
      this.TrabsService.FilterWorks(name.toLowerCase()).subscribe(result => {
        this.works = result;
        this.pagedList = this.works.slice(0, this.itemPages);

        console.log(result);
        
      });
    }
    else {
      if (name === '') {
        this.TrabsService.GetAll().subscribe(result => {
          this.works = result;
          this.pagedList = this.works.slice(0, this.itemPages);

        });
      }
    }


    return this.optionsWorks.filter(works =>
      works.toLowerCase().includes(name.toLowerCase()));
  }

  ShowDialog(id: number, name: string): void {
    this.dialog.open(DialogDeleteCategorysComponent, {
      data: {
        id: id,
        name: name
      }
    }).afterClosed().subscribe(result => {
      if (result === true) {
        this.TrabsService.GetAll().subscribe(dados => {
          this.works = dados;
        })
      }
    });
  }
}

@Component({
  selector: 'app-dialog-delete-works',
  templateUrl: 'dialog-delete-works.html',
})

export class DialogDeleteCategorysComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private trabsService: TrabsService, private SnackBar: MatSnackBar) { }

  DeleteWorks(id: number): void {
    this.trabsService.DeleteWork(id).subscribe(result => {
      this.SnackBar.open(result.message, null!, {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
    });
  }
}

