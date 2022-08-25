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

  const roundNum = (target) => {
    return Number(target).toFixed(0)
  }


  return (
    <div className="App">
      <Header />
      <Search link={link} redirect={redirect} />
      {/* <Search setSearch={setSearch} search={search} setDisplay={setDisplay} display={display} /> */}
      <div className='container-group'>
        <Featured redirect={redirect} />
        <Recent redirect={redirect} />
      </div>
      <Rating redirect={redirect} roundNum={roundNum} />
      <PriceLow redirect={redirect} roundNum={roundNum} />
    </div>
  );
}

export default App;
