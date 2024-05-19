import './App.css'
import './index.css'
import { CORE_CONCEPTS } from './data';
import Header from './components/Header';
import CoreConcept from './components/CoreConcepts';
import TabButtons from './components/TabButton';

import UserLogin from './exercises/exercise_1';
import { user } from './exercises/exercise_1';

function App() {
  return (
    <>
      <UserLogin></UserLogin>
    </>
  )
}

export default App;
