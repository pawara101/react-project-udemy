import './App.css'
import './index.css'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcepts';
import TabButtons from './components/TabButton';
import { EXAMPLES } from './data';


//to fix the Update issue use useState Hook
import { useState } from 'react';

function App() {
//  const <stateArray> = useState("Please a Click a button");
const [ selectedTopic,setSelectedTopic ] = useState("components");


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
            <TabButtons onSelect={()=>handleSelect("components")}>Components</TabButtons><br /><br />
            <TabButtons onSelect={()=>handleSelect("jsx")}>JSX</TabButtons><br /><br />
            <TabButtons onSelect={()=>handleSelect("props")}>Props</TabButtons><br /><br />
            <TabButtons onSelect={()=>handleSelect("state")}>State</TabButtons><br /><br />
          </menu>
          <div id='tab-content'>
            <h3>{ EXAMPLES[selectedTopic].title }</h3>
            <p>{ EXAMPLES[selectedTopic].description }</p>
            <code>{ EXAMPLES[selectedTopic].code }</code>
          </div>
         </section>
      </main>
    </>
  )
}

export default App;
