import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoritesService {

  private favorites: any[] = []; //favorite movie

  constructor() { }

  //add the given movie to the favorites
  addFavorites(movie: any): any[] {
    this.favorites.push(movie);
    return this.favorites;
  }

  //remove the given movie from the favorites
  removeFavorite(movie: any): any[] {
    let index = this.favorites.findIndex(favorite =>
      favorite.title.toLowerCase() === movie.title.toLowerCase());
    this.favorites.splice(index, 1);
    return this.favorites;
  }

  //get the array of favorites
  getFavorites(): any[] {
    return this.favorites;
  }

  //return whether or not the favorites array has the given movie
  contains(movie: any): boolean {
    return this.favorites.includes(movie);
  }
}