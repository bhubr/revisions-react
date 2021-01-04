import React from 'react';
import './App.css';
import Item from './components/Item';

const items = [
  { id: '1', name: 'Jena', actualDate: '01/09/2002' },
  { id: '2', name: 'Hercule', actualDate: '01/10/2002' },
  { id: '3', name: 'Hera', actualDate: '09/10/2009' },
];

function App() {
  const listChevaliers = items.map((item) => (
    <Item key={item.id} name={item.name} actualDate={item.actualDate} />
  ));
  return <div className="App">{listChevaliers}</div>;
}

export default App;
