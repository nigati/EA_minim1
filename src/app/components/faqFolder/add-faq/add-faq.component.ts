
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/interfaces/booking.interface';
import { Faq } from 'src/app/interfaces/faq.interface';
import { Route } from 'src/app/interfaces/route.interface';
import { User } from 'src/app/interfaces/user.interface';
import { BookingService } from 'src/app/services/booking.service';
import { FaqService } from 'src/app/services/faq.service';
import { RouteService } from 'src/app/services/route.service';
import { UsersService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.css']
})
export class AddFaqComponent implements OnInit {
  faq!: Faq;

  constructor(private faqSrv: FaqService, private router: Router ) { }

  faqForm = new FormGroup({
    title: new FormControl('', Validators.required),
    user: new FormControl('',Validators.required),
    body: new FormControl('',Validators.required),
  
  })

  ngOnInit(): void {
    
  }
  onSubmit(){
    const newFaq: Faq = <Faq><unknown>this.faqForm.value
    this.faqSrv.addOne(newFaq).subscribe(res=>{
      if(res.status == 200){
        this.router.navigate(['/faq/']);
      }
    })
    
  }
}
