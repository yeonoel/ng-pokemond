import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  pokemonsList = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit(){
    console.table(this.pokemonsList)
  }

  selectPokemon(pokemonId: String) {
    const pokemon: Pokemon|undefined = this.pokemonsList.find(pokemon => pokemon.id === +pokemonId)
    console.log(`VOus avez cliqué sur le pokémon  ${pokemon?.name}`)
    this.pokemonSelected = pokemon;
  }

}

