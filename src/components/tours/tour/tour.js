

export default function Tour(props) {
    return (
        <>
            <div id="card">
                <p>{props.passedData2.name}</p>
                <img src={props.passedData2.image} />
            </div>
        </>
    );
}