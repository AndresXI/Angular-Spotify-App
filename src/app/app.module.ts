import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing';
import { FormsModule } from '@angular/forms'; 
import { SpotifyServices } from './services/spotify.services';
import { ArtistComponent } from './artist/artist.component';
import { AlbumComponent } from './album/album.component';
import { ParticlesModule } from 'angular-particle'; 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    SearchComponent,
    ArtistComponent,
    AlbumComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ParticlesModule
  ],
  /** All of our services */
  providers: [
    SpotifyServices
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
