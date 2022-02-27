
import './App.css';
import ReactCardSlider from "./components/ReactCardSlider"
import Data from "./data.js"

function App() {
  return (
    <div id='body'>
      <ReactCardSlider slides={Data}/>
    </div>
  );
}

export default App;
