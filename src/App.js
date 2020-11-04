import { useState, useEffect } from 'react';
import DisplayPokemon from './components/DisplayPokemon';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [ pokemon, setPokemon ] = useState([]);

  // useEffect(() => {
  //   fetch('https://pokeapi.co/api/v2/pokemon/')
  //     .then(res => res.json())
  //     .then(res => setPokemon(res.results))
  // }, []);

  const getPokemon = () => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(res => res.json())
      .then(res => setPokemon(res.results))
      .catch(err => console.log(err))
  }

  return (
    <div className="my-5 mx-auto">

      <div className="d-flex justify-content-center">
        <button 
          className="btn btn-danger"
          onClick={ getPokemon }
        >Catch 'Em All</button>
      </div>

      {
        pokemon.map((p,i) => {
          return <DisplayPokemon
                    pokemon={p}
                    key={i}
                />
        })
      }

    </div>
  );
}

export default App;
