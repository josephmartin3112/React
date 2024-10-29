import ActorItem from "./ActorItem";

export default function ActorList(){
    let allActors=[
        {
            actorId:101,
            actorFirstName:"John",
            actorLastName:"Doe"
        },
        {
            actorId:102,
            actorFirstName:"Jane",
            actorLastName:"Doe"
        },
        {
            actorId:103,
            actorFirstName:"Alice",
            actorLastName:"Doe"
        }
    ];

    let mappedAllActors=allActors.map((eachActor)=>(
        <ActorItem data={eachActor}></ActorItem>
    ));

    return (
        <>
    <h3>LIST OF ACTORS</h3>
    <table className="table table-striped">
        <thead>
            <tr>
                <th>Actor Id</th>
                <th>First Name</th>
                <th>Last Name</th>
            </tr>
        </thead>
        <tbody>{mappedAllActors}</tbody>
    </table>
    </>
    );
}