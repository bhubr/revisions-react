import React from 'react';
import './App.css';
import Item from './components/Item';

function App() {
  return (
    <div className="App">
      <Item name='Jena' actualDate='01/09/2002'/>
      <Item name= 'Hercule' actualDate='01/10/2002'/>
    </div>
  );
}

export default App;
