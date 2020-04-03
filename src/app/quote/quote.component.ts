import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1, "Ken M.", "Machines are worshipped because they are beautiful and valued because they confer power; they are hated because they are hideous and loathed because they impose slavery", new Date(2019, 4, 4), 3, 4, "no", "no"),
    new Quote(2, "Raphael K.", "Technology is just a tool. In terms of getting the kids working together and motivating them, the teacher is the most important.", new Date(2016, 5, 1), 6, 2, "no", "no"),
    new Quote(3, "Faith T.", "You never change things by fighting the existing reality. To change something, build a new model that makes the existing model obsolete.",new Date(2019,4,5),4,2,"no","no"),
    new Quote(4, "Abdulfatah M.", "We are stuck with technology when what we really want is just stuff that works",new Date(2019,4,5),4,2,"no","no"),
    new Quote(5, "Meshack M.", "Most of the time spent wrestling with technologies that don't quite work yet is just not worth it for end users, however much fun it is for nerds",new Date(2019,4,5),4,2,"no","no"),
  ]
  constructor() { }
  addNewQuote(quote) {
    let id = this.quotes.length + 1;
    quote.id = id;
    setTimeout(()=>{
      this.quotes.unshift(quote);
    },1000)
  }
  deleteQuote(del: boolean, index: any) {
    if (confirm("Sure to delete?")) {
      setTimeout(()=>{
        this.quotes.splice(index, 1);
      },400)
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
