// // import { Component, OnInit } from '@angular/core';
// //
// // @Component({
// //   selector: 'app-book-detail',
// //   templateUrl: './book-detail.component.html',
// //   styleUrls: ['./book-detail.component.css']
// // })
// // export class BookDetailComponent implements OnInit {
// //
// //   constructor() { }
// //
// //   ngOnInit(): void {
// //   }
// //
// // }
//
//
// import { BookService } from '../../services/book.service';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
//
// @Component({
//   selector: 'app-book-detail',
//   templateUrl: './book-detail.component.html',
//   styleUrls: ['./book-detail.component.css'],
// })
// export class BookDetailComponent implements OnInit {
//   book: any;
//   constructor(
//     private bookService: BookService,
//     private route: ActivatedRoute
//   ) {}
//
//   ngOnInit(): void {
//     // @ts-ignore
//     const id = +this.route.snapshot.paramMap.get('id');
//     console.log(id);
//
//     this.bookService.bookDetail(id).subscribe(
//       (next) => (this.book = next),
//       (error) => {
//         console.log(error);
//         this.book = null;
//       }
//     );
//   }
// }
//


import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {BookService} from "../../services/book.service";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book?: any
  id?: number

  constructor(private activeRouter: ActivatedRoute,
              private BooksService: BookService,
              private router: Router,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.activeRouter.paramMap.subscribe((paramMap: ParamMap) => {
      // @ts-ignore
      this.id = paramMap.get('id')
      this.BooksService.show(this.id).subscribe(res => {
        this.book = res
        console.log(this.book)
      })
    })
  }

}
