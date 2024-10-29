let ButtonClick=function(){

    let count=0;
function handleClick(){
    alert("Button Clicked!");
    count++;
    console.log("Button Clicked: ", count);
}

    return (
    <>
    <button onClick={handleClick}>Click Me</button>
    <div>{count}</div>
    </>
    );
};

export default ButtonClick;