import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	public heroes:Heroe[];
	public texto:string;

  constructor(
  	private _activatedRoute: ActivatedRoute,
  	private _heroesService: HeroesService
  ) {
  		this.heroes = [];
   }

  ngOnInit() {
  	this._activatedRoute.params.subscribe(params => {
  			this.texto = params['text'];
  			this.heroes = this._heroesService.searchHeroes( this.texto );
  			console.log(this.heroes);
  		});
  }

}
