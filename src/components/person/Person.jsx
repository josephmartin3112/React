import PersonItem from "./PersonProps";

export default function PersonList() {
    const persons = [
        { personId: 1, firstName: 'Alice', lastName: 'Smith', age: 30, occupation: 'Engineer' },
        { personId: 2, firstName: 'Bob', lastName: 'Johnson', age: 25, occupation: 'Designer' },
        { personId: 3, firstName: 'Charlie', lastName: 'Brown', age: 35, occupation: 'Teacher' },
    ];

    const mappedPersons = persons.map((eachPerson) => (
        <PersonItem key={eachPerson.personId} data={eachPerson}></PersonItem>
    ));

    return (
        <>
            <h3>LIST OF PERSONS</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Person ID</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                        <th>Occupation</th>
                    </tr>
                </thead>
                <tbody>{mappedPersons}</tbody>
            </table>
        </>
    );
}