import { SpotifyServices } from './../services/spotify.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  
  /** Injecting the Spotify Service */
  constructor(private spotifyService: SpotifyServices) { }
  
  ngOnInit() {
  }
  
  /** Search music function**/
  searchMusic() {
    // /** Calling the search music function in spotify service */
    // this.spotifyService.searchMusic(this.searchStr)
    // // subscribe to the observable 
    // .subscribe(res =>  {
    //   // console.log the json object 
    //   console.log(res.artists.items); 
    // })
    this.spotifyService.getToken()
      .subscribe( res => {
        this.spotifyService.searchMusic(this.searchStr, 'artist', res.access_token)
          .subscribe( res=> {
           console.log(res.artists.items); 
          })
      })
      
      
  }

}
