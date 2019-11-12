import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'movie',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent implements OnInit {
  @Input() favorites: Array<any>;

  title: string= '';
  newMovie: string = '';
  newTitle: string = '';
  

  popularList: any[] = [];
  movieResults: any[] = [];
  // movie: any[] = [];

  constructor(private searchService: SearchService) {
    this.searchService
    .fetchPopular()
    .subscribe((res: any) =>{
    this.popularList = res.results;
  });
}



// addToWatchlist() {
  // console.log(`The movie ${movieTitle} was added to the watchlist` );
  // console.log('Working');

  // this.movieResults.push(this.favorites)
  
//   const newItem = {
//     title: this.newTitle
    
//   };
//   console.log('new title')
//   this.movies.push(newItem);
//   // this.newTitle = null;
  
// };
  
  // return movieTitle;


// searchByName() {

// }

// searchByYear(){
//     console.log(subYear);
//     this.searchService
//     .fetchByYear(subYear)
//     .subscribe((response: any) => { 
//       console.log(response);
//       this.movieResults = response.results;
//       console.log(this.movieResults)
//     }, error => {
//     console.log(`oh no. ${error}`);
//     });
// }


search(subName: string): void { 
  console.log(subName);
  this.searchService
  .fetchMoviesByName(subName)
  .subscribe((response: any) => { 
    console.log(response);
    this.movieResults = response.results;
    console.log(this.movieResults)
  }, error => {
    console.log(`oh no. ${error}`);
  }); 
}
  
  ngOnInit() {
  }

}