import { useState } from 'react'
import './App.css'
import { CORE_CONCEPTS } from './data';


const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function getRandomInt(max: number){
  return Math.floor(Math.random() * (max + 1))
}

interface CoreConceptProps {
  image: string;
  title: string;
  desc: string;
}

function CoreConcept(props : CoreConceptProps){
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
    </li>
  )
}

function Header(){
  return (
    <header>
      <h1>React Essentials</h1>
      <p>
        {reactDescriptions[getRandomInt(2)]} React concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

function App() {
const name: string = "Pawara"
  return (
    <>
      <h1>hello {name}</h1>
      <Header></Header>

      <main>
        <section>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept desc={''} {...CORE_CONCEPTS[0]} />
            <CoreConcept desc={''} {...CORE_CONCEPTS[1]} />
            <CoreConcept desc={''} {...CORE_CONCEPTS[2]} />
            <CoreConcept desc={''} {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </>
  )
}

export default App
