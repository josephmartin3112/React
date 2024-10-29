export default function PersonItem({ data }) {
    return (
        <tr>
            <td>{data.personId}</td>
            <td>{data.firstName}</td>
            <td>{data.lastName}</td>
            <td>{data.age}</td>
            <td>{data.occupation}</td>
        </tr>
    );
}