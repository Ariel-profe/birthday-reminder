
import { useState } from 'react';
import './App.css';
import { ListComponent } from './components/ListComponent';
import {persons} from './data/data';


function App() {

  const [people, setPeople] = useState(persons);
  
  return (
    <main>
      <section className='container'>
        <h3>{people.length} birthdays today</h3>
        <ListComponent people={people} />
        <button
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  )
}

export default App
