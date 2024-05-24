import './App.css'
import './index.css'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcepts';
import TabButtons from './components/TabButton';

import UserLogin from './exercises/exercise_1';
import { user } from './exercises/exercise_1';

function App() {
    //button click function
    const handleSelect = (selectedButton: void): void =>{
      // selectedButton --> Button1,Button2,Button3
      // Pass handleSelect with an arrow function(anonymous function)
      console.log(selectedButton);
    }
  const name: string = "Pawara"
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
            <TabButtons onSelect={()=>handleSelect("Components")}>Components</TabButtons>
            <TabButtons onSelect={()=>handleSelect("Props")}>Props</TabButtons>
            <TabButtons onSelect={()=>handleSelect("state")}>state</TabButtons>
          </menu>
          Dynamic Content
         </section>
      </main>
    </>
  )
}

export default App;
