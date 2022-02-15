import Home from './components/home/Home.js';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
const data=require("./data/db.json")
function App() {
  return (
    <>
    {/* <Home myData={data}/> */}
    <Routes>
        <Route path="/" element={<Home myData={data}/>} />
        {/* <Route path="about" element={<About />} /> */}
      </Routes>
    </>
  );
}

export default App;
