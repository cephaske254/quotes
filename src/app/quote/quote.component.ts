import { Component, OnInit } from '@angular/core';
import {Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[] = [
    new Quote(1,"Ken Maina","Quote Here",new Date(2019,4,4)),
    new Quote(2,"Ken Maina","Quote Here",new Date(2016,5,1)),
    new Quote(3,"Ken Maina","Quote Here",new Date(2016,5,1)),
  ]
  constructor() { }

  addNewQuote(quote){  
   let id = this.quotes.length+1;
   quote.id=id;
  this.quotes.push(quote);
  }
  ngOnInit(): void {
  }

}
