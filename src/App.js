import Home from './components/home/Home.js';
import './App.css';
const data=require("./data/db.json")
function App() {
  return (
    <>
    <Home myData={data}/>
    </>
  );
}

export default App;
