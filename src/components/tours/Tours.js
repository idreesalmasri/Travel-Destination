import "./Tours.css";
export default function (props){
    // console.log(props.passedData);
    return(
        <div id="wrap">
        {
         props.passedData.map(ele=>{
             return(
                <div id="card">
                    <p>{ele.name}</p>
                    <img src={ele.image}/>
                </div>
             );
         })   
        }
        </div>
    );
}