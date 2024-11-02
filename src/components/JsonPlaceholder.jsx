import { useState } from "react";

export default function JsonPlaceholder() {

    const [allPosts, setAllPosts] = useState([]);
  function handleClick() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAllPosts([...data]);
  });
}

let mappedAllPosts = allPosts.map((eachPost) => (
    <tr key={eachPost.id}>
    <td>{eachPost.id}</td>
    <td>{eachPost.title}</td>
    <td>{eachPost.userId}</td>
    <td>{eachPost.body}</td>
    </tr>
));

  return (
    <>
      <div className="container m-2">
        <h2>JsonPlaceholder API</h2>
        <p>This is a simple API to fetch data from JSONPlaceholder.com.</p>
        <div>
          <button className="btn btn-primary" onClick={handleClick}>
            Fetch Data
          </button>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>User ID</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>{mappedAllPosts}</tbody>
          </table>
        </div>
        <div id="data"></div>
      </div>
    </>
  );
}
