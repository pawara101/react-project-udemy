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
  const [selectedTopic, setSelectedTopic] = useState();


  const name: string = "Pawara";

  //button click function
  const handleSelect = (selectedButton: string): void => {
    // selectedButton --> Button1,Button2,Button3
    setSelectedTopic(selectedButton)
    console.log(selectedButton);
  }

  console.log("App Component Rendered") // this should be printed 3 times

  let tabContent = <p>Please Select a topic !!!</p>;
  if (selectedTopic) {
    tabContent = (
      <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <code>{EXAMPLES[selectedTopic].code}</code>
          </div>
    );
  }
  return (
    <>
      <h1>hello {name} !!!</h1>
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
              {CORE_CONCEPTS.map((item) => (
                  <CoreConcept key={item.title} {...item} />
              ))}
          </ul>
        </section>
        <section id='examples'>
          <h2 id='exp'>Examples</h2>
            <TabButtons isSelected={selectedTopic === 'components'} onSelect={() => handleSelect("components")}>Components</TabButtons>
            <TabButtons isSelected={selectedTopic === 'jsx'} onSelect={() => handleSelect("jsx")}>JSX</TabButtons>
            <TabButtons isSelected={selectedTopic === 'props'} onSelect={() => handleSelect("props")}>Props</TabButtons>
            <TabButtons isSelected={selectedTopic === 'state'} onSelect={() => handleSelect("state")}>State</TabButtons>
          {tabContent}
        </section>
      </main>
    </>
  )
}

export default App;
