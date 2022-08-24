import logo from './logo.svg';
import './App.css';
import Results from './Search';
import Search from './Search';
import { useState } from 'react';
import Rating from './Rating';
import Header from './Header';
import Recent from './Recent';
import PriceLow from './PriceLow';
import Featured from './Featured';

function App() {

  const link = "https://www.cheapshark.com/api/1.0/"
  const redirect = "https://www.cheapshark.com/redirect?dealID="

  // console.log(`root state = ${search}`)


  return (
    <div className="App">
      <Header />
      <Search link={link} />
      {/* <Search setSearch={setSearch} search={search} setDisplay={setDisplay} display={display} /> */}
      <Featured redirect={redirect} />
      <Rating redirect={redirect} />
      <PriceLow />
      <Recent redirect={redirect} />
    </div>
  );
}

export default App;
