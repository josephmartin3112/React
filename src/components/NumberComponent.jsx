function NumberComponent(){
    let Odd=[1,3,5,7,9];
    let Even=[2,4,6,8,10];
    let AllNumbers=[...Odd,...Even].sort((a,b)=>a-b);
    return(
        <div>
            <h3>Odd Numbers:</h3>
            <ul>
                {Odd.map((number)=>
                <li>{number}</li>
            )}
                
            </ul>
            <h3>Even Numbers:</h3>
            <ul>
                {Even.map((number)=>
                <li>{number}</li>
            )}
            </ul>
            <h3>All numbers:</h3>
            <ul>
                {
                AllNumbers.map((number)=>
                <li>{number}</li>
                )
                }
            </ul>
        </div>
    );
}

export default NumberComponent;