import { SpotifyServices } from './../services/spotify.services';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../../Artists';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  /** the string to search for */
  searchStr: string;
  searchResults: Artist[]; 
  
  /** Injecting the Spotify Service */
  constructor(private spotifyService: SpotifyServices) { }
  
  ngOnInit() {
  }
  
  /** Search music function**/
  searchMusic() {

    this.spotifyService.getToken()
      .subscribe( res => {
        this.spotifyService.searchMusic(this.searchStr, 'artist', res.access_token)
          .subscribe( res=> {
           this.searchResults = res.artists.items; 
          })
      })
      
      
  }

}
