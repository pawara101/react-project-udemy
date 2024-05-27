import './App.css'
import './index.css'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcepts';
import TabButtons from './components/TabButton';


//to fix the Update issue use useState Hook
import { useState } from 'react';

function App() {
//  const <stateArray> = useState("Please a Click a button");
const [ selectedTopic,setSelectedTopic ] = useState("Please a Click a button");


  const name: string = "Pawara"

    //button click function
    const handleSelect = (selectedButton: string): void =>{
      // selectedButton --> Button1,Button2,Button3
      setSelectedTopic(selectedButton)
      console.log(selectedButton);
    }

    console.log("App Component Rendered") // this should be printed 3 times
  return (
    <>
      <h1>hello {name} !!!</h1>
      <Header></Header>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept desc={''} {...CORE_CONCEPTS[0]} />
          </ul>
        </section>
        <section id='examples'>
          <h2>Examples</h2>
          <menu>
            <TabButtons onSelect={()=>handleSelect("Components")}>Components</TabButtons><br /><br />
            <TabButtons onSelect={()=>handleSelect("Props")}>Props</TabButtons><br /><br />
            <TabButtons onSelect={()=>handleSelect("state")}>state</TabButtons><br /><br />
          </menu>
          { selectedTopic }
         </section>
      </main>
    </>
  )
}

export default App;
