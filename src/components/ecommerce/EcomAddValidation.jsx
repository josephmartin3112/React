import { useState } from "react";

export default function EcomAddValidation() {
  const [gadgetData, setGadgetData] = useState({
    prodId: 0,
    prodName: "",
    prodCost: 0,
    prodImage: "",
  });

  function handleFormChange(event) {
    console.log(event);
    // setGadgetData({...gadgetData,prodName:e.target.value });
    // setGadgetData({...gadgetData,prodCost:e.target.value });
    // setGadgetData({...gadgetData,prodImage: e.target.value })

    setGadgetData({ ...gadgetData, [event.target.name]: event.target.value });
  }

  function handleSubmit(event) {
    //1.prevent the default nature of submit button
    event.preventDefault();
    //2.for now console.log the form data which is in the state variable gadgetData
    //later this form data will be sent to the backend application
    console.log(gadgetData);
  }

  return (
    <>
      <div className="container">
        <div className="card">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="card-header bg-success text-light">
              <h3>ADD A NEW GADGET</h3>
            </div>
            <div className="card-body">
              <div className="form-control-group m-1">
                <label htmlFor="gName" className="form-control">
                  Gadget Name:
                </label>
                <input
                  type="text"
                  id="gName"
                  placeholder="Enter Gadget name"
                  className="form-control"
                  required
                  minLength={3}
                  name="prodName"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger">
                  {gadgetData.prodName != "" ? "" : "Gadget Name is Required"}
                </div>
                <div className="text-danger">
                  {gadgetData.prodName.length > 3
                    ? ""
                    : "Gadget length should be more than 3"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="gCost" className="form-control">
                  Gadget Cost:
                </label>
                <input
                  type="text"
                  id="gCost"
                  placeholder="Enter Gadget cost"
                  className="form-control"
                  required
                  name="prodCost"
                  onChange={(e) => handleFormChange(e)}
                ></input>
                <div className="text-danger">
                  {gadgetData.prodCost != 0 ? "" : "Gadget Cost is Required"}
                </div>
              </div>
              <div className="form-control-group m-1">
                <label htmlFor="gImage" className="form-control">
                  Gadget Image Url:
                </label>
                <input
                  type="text"
                  id="gImage"
                  placeholder="Enter Gadget image url"
                  className="form-control"
                  name="prodImage"
                  onChange={(e) => handleFormChange(e)}
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-light text-success"
                onSubmit={(e) => handleSubmit(e)}
              >
                Add Gadget
              </button>
              <button type="reset" className="btn btn-light text-danger mx-5">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
