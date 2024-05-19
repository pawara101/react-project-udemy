import './App.css'
import './index.css'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcepts';
import TabButtons from './components/TabButton';

function App() {
  //button click function
  const handleSelect = (): void =>{
    console.log("hello")
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
            <TabButtons onSelect={handleSelect}>hello</TabButtons>
          </menu>
         </section>
      </main>
    </>
  )
}

export default App;
