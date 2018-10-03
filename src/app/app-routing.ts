import { AlbumComponent } from './album/album.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { ArtistComponent } from './artist/artist.component';

const appRoutes: Routes = [
    /** home route */
    { path: '', component: SearchComponent },
    /** About route */
    { path: 'about', component: AboutComponent },
    /** Route for the artist page */
    { path: 'artist/:id', component: ArtistComponent},
     /** Route for the albums detail page */
    { path: 'album/:id', component: AlbumComponent }
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes) 
    ], 
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{
    
}