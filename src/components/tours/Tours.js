import "./Tours.css";
import Tour from "./tour/tour";
import { Link } from "react-router-dom";
export default function Tours(props){
    // console.log(props.passedData);
    return(
        <div id="wrap">
        {
         props.passedData.map(ele=>{
             return(
                <Link to={`/city/${ele.id}`}>
                <Tour key={ele.id} passedData2={ele}/>
                </Link>
             );
         })   
        }
        </div>
    );
}