import DisplayProps from "./DisplayProps";

function Display() {
    let name="Mark";
    let allColors=[" RED"," BLUE"," GREEN"];
  return (
    <>
      <h3>Display Component!</h3>
      <p>Hello Bob!</p>
      <p>Hello {name}</p>
      <p>Colors:{allColors}</p>
      <DisplayProps name=" Will" greeting="Hi"></DisplayProps>
    </>
  );
}

export default Display;
