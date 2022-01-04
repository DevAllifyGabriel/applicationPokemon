import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent implements OnInit {

  private setAllPokemons: any;
  public getAllPokemons: any;


  public apiError: boolean = false;
   
  constructor(
    private  pokeApiService: PokeApiService
  ) { }

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;

      },
      error => {
        this.apiError = true;
      }
    );
  }

  public getSearch(value: string){
    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });
    this.getAllPokemons = filter;
  }
}
import { PokeApiService } from 'src/app/services/poke-api.service';