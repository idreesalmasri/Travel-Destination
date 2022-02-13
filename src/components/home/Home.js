import "./Home.css";
import Tours from "../tours/Tours.js";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
export default function Home(props){
    
    return(
        <div id="main">
        
        <Header/>
        <Tours passedData={props.myData}/>
        <Footer/>
        </div>
    );
}