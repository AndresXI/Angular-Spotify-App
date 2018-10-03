import { SpotifyServices } from './../services/spotify.services';
import { Component, OnInit } from '@angular/core';
import { Artist } from '../../Artists';
import { Album } from '../../Album';
import { ActivatedRoute } from '@angular/router'; 
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  // variables 
  id: string;
  artist: Artist[];
  albums: Album[];  

  // inject the spofity service 
  constructor(private spotifyService: SpotifyServices,
    private route: ActivatedRoute) { 

    }

  /** Getting the artist name */
  ngOnInit() {
    this.route.params
      .pipe(map(params => params['id'])) // get the artist id through the route
      .subscribe((id) => {
        this.spotifyService.getToken() // get the access token 
          .subscribe(res => {
            this.spotifyService.getArtist(id, res.access_token)
              .subscribe(artist => {
                this.artist = artist;
              })
            // get the albums object 
            this.spotifyService
              .getAlbums(id, res.access_token)
              .subscribe(albums => {
                this.albums = albums.items;
              });


          })
      }); 
  }

}
