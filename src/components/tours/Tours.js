import "./Tours.css";
import Tour from "./tour/tour";
export default function Tours(props){
    // console.log(props.passedData);
    return(
        <div id="wrap">
        {
         props.passedData.map(ele=>{
             return(
                <Tour passedData2={ele}/>
             );
         })   
        }
        </div>
    );
}