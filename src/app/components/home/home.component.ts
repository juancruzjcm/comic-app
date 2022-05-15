import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../servicios/heroes.services';

@Component({
  selector: 'app-heroes',
  templateUrl: './home.component.html' 
})
export class HomeComponent implements OnInit {

  constructor( private _heroeService:HeroesService) {
    console.log("Consructor");
   }

  ngOnInit(){
    console.log("ngOnInit");

  }

}
