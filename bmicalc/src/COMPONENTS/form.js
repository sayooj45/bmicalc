import { useState } from "react";

function Form({getData}) {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [alert, setAlert] = useState(false);
 
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      console.log("enter valid")
      setAlert(true);
    } else {
      getData(weight,height);
      setAlert(false);
      setheight("")
      setweight("")
      // console.log(weight);
      // console.log(height);
    }
  };
  // let alertmessage;
  // if (alert) {
  //   alertmessage = 
  //     <div className="alert alert-danger" role="alert">
  //       Plz enter valid datas
  //     </div>
   
  // } else {
  //   alertmessage = " ";
  // }

  return (

      <div className="col-sm-4 shadow rounded px-5">
        <h1 className="text-center pt-3 text-secondary h2">BMI Calculator</h1>
        <form onSubmit={onSubmit}>
          <div className="row">
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Weight(kg):</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setweight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
            <div className="col col-sm-6">
              <div className="my-3">
                <label className="form-label">Height(m):</label>
                <input
                  type="text"
                  value={height}
                  onChange={(e) => setheight(e.target.value)}
                  className="form-control"
                  required
                />
              </div>
            </div>
          </div>
          <input
            type="submit"
            className="btn btn-primary my-3"
            value="get BMI"
          />
        </form>
        {alert===true&&<div className="alert alert-danger" role="alert">
         Plz enter valid datas
      </div>}
      </div>

  );
}
export default Form;
