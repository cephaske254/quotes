import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import  $ from 'jquery';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","",new Date(),0,0,"no","no");
  @Output () newQuoteOutput = new EventEmitter<Quote>();

  addQuote(){
   this.newQuoteOutput.emit(this.newQuote);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
$(document).ready(function(){
  $(".addQuotebtn").click(function(){
    $(".addquotecont").slideToggle();
  });
  var maxDate= new Date().toISOString().split("T")[0];
  $("form").submit(function(){
    setTimeout(() => {
      $(this).parent().parent().slideUp();
    }, 300);
  })
  
});
