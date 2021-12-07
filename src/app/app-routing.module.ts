import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from "./components/book-list/book-list.component";
import {BookAddComponent} from "./components/book-add/book-add.component";
import {BookEditComponent} from "./components/book-edit/book-edit.component";
import {BookDetailComponent} from "./components/book-detail/book-detail.component";

const routes: Routes = [
  {
    path: 'books',
    component: BookListComponent,
  },
  {
    path: 'books/add',
    component: BookAddComponent,
  },
  {
    path: 'books/edit/:id',
    component: BookEditComponent,
  },
  {
    path:'books/detail/:id',
    component: BookDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
