import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteAuthorsRoutingModule } from './favourite-authors-routing.module';
import { FavouriteAuthorsComponent } from './favourite-authors.component';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    FavouriteAuthorsComponent
  ],
  imports: [
    CommonModule,
    FavouriteAuthorsRoutingModule,
    NgxPaginationModule
  ]
})
export class FavouriteAuthorsModule { }
