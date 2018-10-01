import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchStr: string;
  
  
  constructor() { }
  
  ngOnInit() {
  }

  /** Search music function**/
  searchMusic() {
    
    console.log(this.searchStr); 
  }

}
