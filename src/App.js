import logo from './logo.svg';
import './App.css';
import Results from './Search';
import Search from './Search';
import { useState } from 'react';
import Rating from './Rating';
import Header from './Header';
import Recent from './Recent';

function App() {

  const link = "https://www.cheapshark.com/api/1.0/"

  // console.log(`root state = ${search}`)


  return (
    <div className="App">
      <Header />
      {/* <Search setSearch={setSearch} search={search} setDisplay={setDisplay} display={display} /> */}
      <Search link={link} />
      <Rating />
      <Recent />
    </div>
  );
}

export default App;
