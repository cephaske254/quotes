import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "Ken Maina", "Quote Here 1", new Date(2019, 4, 4), 3, 4, "no", "no"),
    new Quote(2, "Ken Maina", "Quote Here 2", new Date(2016, 5, 1), 6, 2, "no", "no"),
    new Quote(3, "Ken Maina", "Quote Here 3", new Date(2016, 5, 1), 8, 12, "no", "no"),
  ]
  constructor() { }
  addNewQuote(quote) {
    let id = this.quotes.length + 1;
    quote.id = id;
    this.quotes.push(quote);
  }
  deleteQuote(del: boolean, index: any) {
    if (confirm("Sure to delete?")) {
      this.quotes.splice(index, 1);
    }
  }

  like(index) {
    let thisQuote = this.quotes[index]
    if (thisQuote.disliked && thisQuote.liked == "no") {
      thisQuote.likes = thisQuote.likes + 1;
      thisQuote.liked = "yes";
    } else {
      thisQuote.likes = thisQuote.likes - 1;
      thisQuote.liked = "no";
    }
  }

  dislike(index) {
    let thisQuote = this.quotes[index]
    if (thisQuote.disliked && thisQuote.liked == "no") {
      thisQuote.dislikes = thisQuote.dislikes + 1;
      thisQuote.disliked = "yes";
    } else {
      thisQuote.dislikes = thisQuote.dislikes - 1;
      thisQuote.disliked = "no";
    }

  }

  
  ngOnInit(): void {
  }

}
