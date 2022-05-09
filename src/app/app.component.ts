import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DomSanitizer } from '@angular/platform-browser';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Matter } from './models/Matter';
import { MatterService } from './services/matter.service';
import { TrabsService } from './services/trabs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Trabs';
  url = ''
  event$

  constructor(private router: Router, private dialog: MatDialog
  ) {

    this.event$
      = this.router.events
        .subscribe(
          (event: NavigationEvent) => {
            if (event instanceof NavigationStart) {
              this.url = event.url;
            }
          });
  }

  workExist(url: string) {
    var result = url.indexOf('/works') > -1 ? true : false;

    return result
  }

  ShowDialog(): void {
    this.dialog.open(DialogCreateCategorysComponent).afterClosed().subscribe(result => {
      // if (result === true) {
      //   this.TrabsService.GetAll().subscribe(dados => {
      //     this.works = dados;
      //   })
      // }
    });
  }
}

@Component({
  selector: 'app-dialog-create-works',
  templateUrl: 'dialog-create-works.html',
  styleUrls: ['./app.component.scss']
})

export class DialogCreateCategorysComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private matterService: MatterService, private trabsService: TrabsService, private SnackBar: MatSnackBar, private sant: DomSanitizer) { }

  form: any
  fileSelected?: Blob
  matters: Matter[] | undefined
  base64: string = "Base64...";
  imageURL?: string
  PDF64 = new FileReader()

  MatterName: string | undefined;

  ngOnInit(): void {

    this.matterService.GetAll().subscribe((result) => {
      this.matters = result;
    });


    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(50)]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(1000)]),
      matterId: new FormControl(null, [Validators.required]),
      PDF: new FormControl(null, [Validators.required]),
    });

  }

  get propriedade() {
    return this.form.controls;
  }

  onSelectNewFile(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const PDF = event.target.files[0];

      this.PDF64.readAsDataURL(PDF);
    }
  }

  PostForm(): void {

    this.form.value.PDF = this.PDF64.result;

    const work = this.form.value;

    this.trabsService.PostWork(work).subscribe(result => {
      this.SnackBar.open(result.message, null!, {
        duration: 2000,
        horizontalPosition: 'center',
        verticalPosition: 'top'
      })
    });


  }
}

