import { useState } from "react";

export default function EcomEdit() {
  const [gadgetData, setGadgetData] = useState({
    prodId: 0,
    prodName: "",
    prodCost: 0,
    prodImage: "",
  });

  function handleSubmit(event){
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
          <form onSubmit={(e)=> handleSubmit(e)}>
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
                  onChange={(e) =>
                    setGadgetData({ ...gadgetData, prodName: e.target.value })
                  }
                ></input>
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
                  onChange={(e) =>
                    setGadgetData({ ...gadgetData, prodCost: e.target.value })
                  }
                ></input>
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
                  onChange={(e) =>
                    setGadgetData({ ...gadgetData, prodImage: e.target.value })
                  }
                ></input>
              </div>
              <button
                type="submit"
                className="btn btn-light text-success"
                onSubmit={(e) => handleSubmit(e)}
              >
                Update
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
