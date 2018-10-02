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
    { path: 'artist/:id', component: ArtistComponent}
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