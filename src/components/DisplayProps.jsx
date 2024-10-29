function DisplayProps(props){

    let{name,greeting}=props;

    return(
        <>
        <h3>This is DisplayProps Component!</h3>
        {/* <h4>{props.greeting}{props.name}</h4> */}
        <h4>{greeting} {name}</h4>
        </>
    );
}

export default DisplayProps