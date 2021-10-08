import React from 'react';
import Pokemon from './Pokemon';
import App from './App';
import pokemons from './data';

class Pokedex extends React.Component {
  constructor() {
    super()
    this.state = {
      counter: 0,
      filter: pokemons
    }
    this.next = this.next.bind(this);
    this.back = this.back.bind(this);
    this.typeOfPokemon = this.typeOfPokemon.bind(this);
  }

  typeOfPokemon({ target }) {
    this.setState((previous) => {
      return (target.innerText === 'All') ? { counter: 0, filter: pokemons} : {counter: 0, filter: pokemons.filter((element) => element.type === target.innerText)}
    })
  }

  next() {
    this.setState((numAntes, _props) => {
      return (numAntes.counter < numAntes.filter.length - 1) ? {
        counter: numAntes.counter + 1
      } : { counter: 0 }
    })
  }

  back() {
    this.setState((numAntes, _props) => {
      return (numAntes.counter === 0) ? {
        counter: numAntes.filter.length - 1
      } : { counter: numAntes.counter - 1 }
    })
  }

  render() {
    return (
      <div>
        <div className="pokedex">
          <Pokemon pokemon={this.state.filter[this.state.counter]} />
        </div>
        <button onClick={this.back}>Back</button>
        <button onClick={this.next}>Next</button>
        <div>
        <button onClick={this.typeOfPokemon}>All</button>
        <button onClick={this.typeOfPokemon}>Electric</button>
        <button onClick={this.typeOfPokemon}>Fire</button>
        <button onClick={this.typeOfPokemon}>Bug</button>
        <button onClick={this.typeOfPokemon}>Poison</button>
        <button onClick={this.typeOfPokemon}>Psychic</button>
        </div>
      </div>
    );
  }
}
{/* <Pokemon pokemon={this.props.pokemons.find(pokemon => pokemon.name === pokemons[this.state.counter].name)} /> */ }

export default Pokedex;