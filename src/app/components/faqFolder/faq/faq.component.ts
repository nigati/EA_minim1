
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Faq } from 'src/app/interfaces/faq.interface';
import { User } from 'src/app/interfaces/user.interface';
import { FaqService } from 'src/app/services/faq.service';
import { ConfirmationDialogComponent } from '../../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  @Input() faq!: Faq
  @Output() deleteFaq = new EventEmitter<Faq>();
  @Output() editFaq=new EventEmitter<Faq>();
  constructor() { }

  ngOnInit(): void {
    console.log(this.faq)
  }
  delete():void{
    this.deleteFaq.emit(this.faq)
  }
  edit():void{
    this.editFaq.emit(this.faq);
  }
}

