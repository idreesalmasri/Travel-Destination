import "./TourDetails.css";
import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import { useParams } from 'react-router-dom';
import { useState } from 'react';
export default function TourDetials(props) {
    const [istourinfo, settourinfo] = useState(false);
    function clickhandle() {
        settourinfo(!istourinfo)
    }
    let { id } = useParams();
    let filteredData = props.myData.filter(element => element.id == id)
    return (
        <>
            <Header />
            <div id='rr'>
            {istourinfo ? filteredData[0].info : `${filteredData[0].info.substring(0, 225)}`}
            {istourinfo ? <button onClick={clickhandle}>see less</button> :
                <button onClick={clickhandle} >see more</button>}
            <p>City :  {filteredData[0].name} </p>
            <p>Price : {filteredData[0].price}</p>
            <img src={filteredData[0].image} />
            </div>
            <Footer />
        </>

    );
}