import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {BookService} from "../../services/book.service";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  formAddBook?: FormGroup;

  constructor(private fb: FormBuilder,
              private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formAddBook = this.fb.group({
      title: [''],
      author: [''],
      description: [''],
    })
  }
  submit() {
    let data = this.formAddBook?.value;
    this.bookService.createBook(data).subscribe(response => {
      this.router.navigate(['books']);
    })
  }
}
