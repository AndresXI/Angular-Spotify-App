import { Component, OnInit } from '@angular/core';
import { SpotifyServices } from './../services/spotify.services';
import { Artist } from '../../Artists';
import { Album } from '../../Album';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {


  // variables 
  id: string;
  album: Album[];

  // inject the spofity service 
  constructor(private spotifyService: SpotifyServices,
    private route: ActivatedRoute) {

  }

  /** Getting the artist album */
  ngOnInit() {
    this.route.params
      .pipe(map(params => params['id'])) // get the artist id through the route
      .subscribe((id) => {
        this.spotifyService.getToken() // get the access token 
          .subscribe(res => {
            this.spotifyService.getAlbumDetails(id, res.access_token)
              .subscribe(album => {
               console.log(album)
                this.album = album;
              })
          })
      });
  }

}
