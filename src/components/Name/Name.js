const name = (props) => {

    const styling = {
        textAlign: "center",
        backgroundColor: props.bgColor,
        width: "30%",
        margin: "auto",
        marginBottom: "6px",
    };

    return(
        <>
        <div style={styling}>
            <h1 style={{color: props.fcolor, marginBottom: "0px"}}>{props.name}</h1>
        </div>
        <input type="text" placehorlder="Please type something" onChange={props.onChange}></input>
        </>
    )
}

export default name;