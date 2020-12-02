import { Component } from "@angular/core";
import { BOOKS_QUERY } from "./queries";
import { CREATE_BOOK, DELETE_BOOK, UPDATE_BOOK } from "./mutations";
import { Apollo } from "apollo-angular";
import { Book } from "./book.interface";


@Component({
  selector: "app-books",
  templateUrl: "./books.component.html",
  styleUrls: ["./books.component.css"],
})
export class BooksComponent {
  books: Book[];

  is_editting = false;

  current_book: Book;

  constructor(private apollo: Apollo) {
    this.current_book = {
      id: -1,
      name: "",
      description: "",
      price: 0,
      authorId: -1,
      author: null,
    };
    this.getBooks();
  }



  getBooks(){
    this.apollo.watchQuery({
      query: BOOKS_QUERY,
      fetchPolicy: 'network-only',
    }).valueChanges.subscribe(result => {
      this.books = result.data['books'];
    });
  }
}
