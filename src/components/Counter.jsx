import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Counter() {
  //let count = 0; //put this count in the state of the component
  const [count, setCount] = useState(0); //useState hook to manage the count state
  function handleIncrement() {
    setCount(count + 1);
    console.log("Incremented", count);
  }
  function handleDecrement() {
    setCount(count - 1);
    console.log("Decremented", count);
  }
  return (
    <>
      <div className="container text-center mt-5 p-4 bg-light rounded shadow">
        <h2 className="mb-4">Counter</h2>
        <div className="d-flex justify-content-center align-items-center">
          <button
            className="btn btn-warning btn-lg me-3"
            onClick={handleIncrement}
          >
            +
          </button>
          <span
            className="mx-4 badge bg-success fs-3 p-3"
            style={{ minWidth: "60px" }}
          >
            { count }
          </span>
          <button
            className="btn btn-warning btn-lg ms-3"
            onClick={handleDecrement}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
}
