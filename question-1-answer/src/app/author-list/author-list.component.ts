import { Component, OnInit } from '@angular/core';
import {AuthorsService} from '../authors.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {

  p: number = 1;
  data: any;

  constructor(private author: AuthorsService) {

 }

 onsave() {
   localStorage.setItem("data", JSON.stringify(this.data.results));
 }

  ngOnInit(): void {
    this.author.getData().subscribe((data: any) => {
      console.log(data);
      this.data = data;
    })
  }

}
