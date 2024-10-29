function Person(){
    let onePerson={
        personId:101,
        personFirstName:"John",
        personLastName:"Doe"
    };
    return(
        <>
        <h3>Person Component</h3>
        <h6>Person Id:{onePerson.personId}</h6>
        <h6>Person First Name:{onePerson.personFirstName}</h6>
        <h6>Person Last Name:{onePerson.personLastName}</h6>
        </>
    );
}

export default Person;