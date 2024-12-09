import { Component, OnInit  } from '@angular/core';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent  implements OnInit {

  title: string = "";
  author:string = "";

  books:Book[] = [];

  ngOnInit(): void {
    let savedBooks = localStorage.getItem("books");

    this.books = savedBooks ? JSON.parse(savedBooks) : [];
  }


  addBook(){
    this.books = [...this.books, {id: Date.now(), title: this.title, author: this.author}]

    this.title = "";
    this.author = "";
    
    localStorage.setItem("books", JSON.stringify(this.books));
  }

  deleteBook(id: number){
    this.books = this.books.filter(book => book.id !== id);
  }

}
