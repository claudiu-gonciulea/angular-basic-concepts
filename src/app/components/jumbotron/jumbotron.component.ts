import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

    favoriteSite = "programmers-code.org";
    
    constructor() { }

    ngOnInit() {
    }
}
