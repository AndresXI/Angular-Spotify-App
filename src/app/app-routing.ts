import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
    /** home route */
    { path: '', component: SearchComponent },
    /** About route */
    { path: 'about', component: AboutComponent }
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