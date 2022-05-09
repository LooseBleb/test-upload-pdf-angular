import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Work } from 'src/app/models/Work';
import { TrabsService } from 'src/app/services/trabs.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-trab',
  templateUrl: './trab.component.html',
  styleUrls: ['./trab.component.scss']
})
export class TrabComponent implements OnInit {

  id!: number;
  work!: Work;
  // work: any

  constructor(private router: Router,
    private route: ActivatedRoute,
    private trabsService: TrabsService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.trabsService.GetWorkID(this.id).subscribe(result => {
      this.work = result      
    });
  }
  // get propriedade(){
  //   return this.form.controls;
  // }


  downloadpdf(id : number){
    this.trabsService.GetPDF(id).subscribe(
      result => {
        const fileName = `${result.name}.pdf`

        saveAs(result.pdf, fileName);
      }, err => {
        console.log(err);
        
      }
    )
  }
}
