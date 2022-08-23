import logo from './logo.svg';
import './App.css';
import Results from './Search';
import Search from './Search';
import { useState } from 'react';

function App() {

  // console.log(`root state = ${search}`)


  return (
    <div className="App">
      {/* <Search setSearch={setSearch} search={search} setDisplay={setDisplay} display={display} /> */}
      <Search />
    </div>
  );
}

export default App;
