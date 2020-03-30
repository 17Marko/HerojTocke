import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { DummyService } from '../dummy.service';
import {NgForm} from '@angular/forms';
import {FormsModule} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {

	heroes = HEROES;
	selectedHero: Hero;
	checkoutForm;
  
	private fieldArray: Array<any> = [];
	private hero: any = {};

	constructor(private heroService: HeroService, private formBuilder: FormBuilder,) {
		this.checkoutForm = this.formBuilder.group({
			ime: '',
			tocke: ''
		});	
	}
	
	ngOnInit() {
		this.loadData();
	}

	loadData(){		
		var array = this.heroes;
		array.sort((a,b) => b.tocke - a.tocke);
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}
  
	ngDoCheck() {
		this.loadData();
	}
	
	getHeroes(): void {
		this.heroService.getHeroes()
		.subscribe(heroes => this.heroes = heroes);
	}
	
	add(arrayHero) {
		var herojeveTocke = parseInt(arrayHero.tocke);
		arrayHero.tocke=herojeveTocke;
		this.heroService.addHero(arrayHero)
			.subscribe(hero => {
				this.heroes.push(arrayHero);
			});
		this.loadData();
	}
	
	delete(hero: Hero): void {
		this.heroes = this.heroes.filter(h => h !== hero);
		this.heroService.deleteHero(hero).subscribe();
	}	
	
	onSubmit(hero: Hero) {
		var arrayHero = hero;
		this.add(arrayHero);
		this.checkoutForm.reset();
		this.loadData();
	}
}