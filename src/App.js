import logo from './logo.svg';
import './App.css';
import { Score } from './Components/Score';
import { Solution } from './Components/Solution';
import { Letters } from './Components/Letters'
function App() {
  return (
    <  >
    <Score number={100}/>
    <Solution word={"hello"} hint={"Wellcome Word"} />
    <Letters/>
    </>
  );
}

export default App;
