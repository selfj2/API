import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FavoritesService } from '../favorites.service';

 
@Component({
  selector: 'watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
​
  
})
export class WatchlistComponent implements OnInit{ 

​  favorites: any[];

constructor(private favoritesService: FavoritesService) { }

ngOnInit() {
  this.favorites = this.favoritesService.getFavorites();
}

}