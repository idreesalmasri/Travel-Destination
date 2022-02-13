
export default function (props){
    // console.log(props.passedData);
    return(
        <>
        {
         props.passedData.map(ele=>{
             return(
                <div>
                    <p>{ele.name}</p>
                    <img src={ele.image}/>
                </div>
             );
         })   
        }
        </>
    );
}