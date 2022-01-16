import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../authors.service';

@Component({
  selector: 'app-favourite-authors',
  templateUrl: './favourite-authors.component.html',
  styleUrls: ['./favourite-authors.component.css']
})
export class FavouriteAuthorsComponent implements OnInit {

  p: number = 1;
  data: any;
  constructor(private favouriteAuthor: AuthorsService) {

 }


  ngOnInit(): void {
    this.favouriteAuthor.getData().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    })
  }



}
