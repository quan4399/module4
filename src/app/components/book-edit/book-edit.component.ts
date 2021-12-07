import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookService} from "../../services/book.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {

  books: any = []
  id?: number;
  formEditBook?: FormGroup;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.formEditBook = this.fb.group({
      title: ['', [Validators.required]],
      author: ['', [Validators.required]],
      description: ['', [Validators.required]]

    })
    this.activateRoute.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = +paramMap.get('id');
      this.show(this.id)
    })
  }

  show(id: any) {
    this.bookService.show(id).subscribe(res => {
      this.books = res;
      this.formEditBook?.patchValue({
        title: this.books?.title,
        author: this.books?.author,
        description: this.books?.description
      })
    })
  }

  submit() {
    let data = this.formEditBook?.value
    this.bookService.editBook(data, this.id).subscribe(res => {
      console.log(res)
      this.router.navigate(['books'])
    })
  }
}
