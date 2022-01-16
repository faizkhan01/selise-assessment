import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorListRoutingModule } from './author-list-routing.module';
import { AuthorListComponent } from './author-list.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AuthorListComponent
  ],
  imports: [
    CommonModule,
    AuthorListRoutingModule,
    NgxPaginationModule
  ]
})
export class AuthorListModule { }
