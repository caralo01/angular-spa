import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

	heroes:Heroe[] = [];
  constructor(
  	private _heroesSerice: HeroesService,
  	private _router:Router
  	){
  		console.log("Consturctor");
  	}

  ngOnInit() {
  	this.heroes = this._heroesSerice.getHeroes();
  }

  showHeroe(index:number){
  	this._router.navigate(['/heroe', index]);
  }

}
