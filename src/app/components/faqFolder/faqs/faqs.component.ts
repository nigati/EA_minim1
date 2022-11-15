


import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { User } from '../../../interfaces/user.interface';
import { Faq } from 'src/app/interfaces/faq.interface';
import { FaqService } from 'src/app/services/faq.service';
import { Router } from '@angular/router';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';
import { ColDef } from 'ag-grid-community/dist/lib/entities/colDef';
import { CellClickedEvent } from 'ag-grid-community';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
  faqs: Faq[]= [];
  colDef: ColDef[]=[
    {field: '_id'},
    {field: 'title'},
    {field: 'body'},
    {field: 'dayOfCreation'}
  
  ]
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  

  constructor(private faqSrv: FaqService,public dialog: MatDialog,private router: Router) { }
  rowData$!:any;

  ngOnInit(): void {
    this.faqSrv.getAll().subscribe(
      resp => {
        if(resp.status == 200){ 
      
      this.faqs = resp.body!;
      this.rowData$=resp.body!.map(({_id,title,body,dayOfCreation})=>({_id,title,body,dayOfCreation}));
      console.log(this.rowData$);
        }
    })
  }
  onCellClicked( e: CellClickedEvent): void {
    console.log(e.data);
    this.router.navigate(['/faq/',e.data._id]);
  }
  
  }


