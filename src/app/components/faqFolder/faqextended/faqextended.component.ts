
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { subscribeOn } from 'rxjs';
import { Faq } from 'src/app/interfaces/faq.interface';
import { FaqService } from 'src/app/services/faq.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-faqextended',
  templateUrl: './faqextended.component.html',
  styleUrls: ['./faqextended.component.css']
})
export class FaqextendedComponent implements OnInit {
  faq: Faq;
  _id: string | null;
  constructor(
    private faqSrv: FaqService,
    public dialog: MatDialog,
    private router: Router,
    private aRouter: ActivatedRoute
    ) {
      this._id = this.aRouter.snapshot.paramMap.get('_id');
      console.log(this._id);
     }

  ngOnInit(): void {
    this.getFaqInfo();
  }
  async getFaqInfo() {
    if (this._id !==null) {
      this.faqSrv.getOne(this._id).subscribe(resp=>{
        if(resp.status==200){
          this.faq=resp.body!;
          console.log(this.faq);
        }
      })
    }

    throw new Error('Method not implemented.');
  }

  editFaq(faq:Faq):void{
    this.router.navigate(['/faq/'+faq._id+'/editFaq'])
  }

  deleteOneFaq(faq: Faq): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '500px',
      data: {name: faq.title}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.faqSrv.deleteOne(faq._id).subscribe(
          response =>  { 
            if(response.status == 200){
              console.log(response.status);
              this.router.navigate(['/faq/']);
          }
        });
      }
    });

      
  }
}
