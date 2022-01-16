import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'authors',
  loadChildren: () => import('./author-list/author-list.module')
  .then(m => m.AuthorListModule)
 },
  { path: 'favouriteAuthors',
  loadChildren: () => import('./favourite-authors/favourite-authors.module')
  .then(m => m.FavouriteAuthorsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
