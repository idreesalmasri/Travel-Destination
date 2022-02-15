import Home from './components/home/Home.js';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import TourDetials from './components/TourDetails/TourDetails.js';
const data=require("./data/db.json")
function App() {
  return (
    <>
    {/* <Home myData={data}/> */}
    <Routes>
        <Route path="/" element={<Home myData={data}/>} />
        <Route path="/city/:id" element={<TourDetials myData={data}/>} />
      </Routes>
    </>
  );
}

export default App;
