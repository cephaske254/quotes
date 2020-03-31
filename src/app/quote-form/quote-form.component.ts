import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from '../quote';
import  $ from 'jquery';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {
  newQuote = new Quote(0,"","",new Date());
  @Output () newQuoteOutput = new EventEmitter<Quote>();

  addQuote(){
   this.newQuoteOutput.emit(this.newQuote);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
$(document).ready(function(){
alert()
});
