import {Component, OnInit} from '@angular/core';
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: any[] = [];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.getAllBook()
  }

  getAllBook() {
    this.bookService.getAllBook().subscribe(response => {
     {
        this.books = response;
      }
    })
  }

  deleteBook(id: any) {
    this.bookService.deleteBook(id).subscribe(response => {
        alert(response.message);
        this.getAllBook();
    })
  }
}
