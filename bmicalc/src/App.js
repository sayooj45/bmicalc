import { useState } from "react";
import "./App.css";
import Form from "./COMPONENTS/form";
import Bmiscore from "./COMPONENTS/bmiscore";
import Bmilist from "./COMPONENTS/bmilist";

function App() {
  const [show,setshow]=useState(false);
  const [changeweight,setChangeWeight]=useState({weight:"",type:""})
  const [bmi, setBmi] = useState("00");
  const [bmitype, setBmiType] = useState("Not calculated");
  const [bmirange,setBmiRange]=useState({
    underweight:{ low:""},
    normal:{low:"",high:""},
    overweight:{low:"",high:""},
    obesityone:{low:"",high:""},
    obesitytwo:{low:"",high:""},
    obesitythree:{low:"",high:""}
  });
  const onFormSub = (w, h) => {
    let b=calcBmi(w,h)
    setBmi(b);
    setBmiType(weightType(b))
    console.log(w,h);
    const range ={
      underweight:{ low: calweight(18.5,h)},
      normal:{low: calweight(18.5,h),high: calweight(24.9,h)},
      overweight:{low:calweight(25,h),high:calweight(29.9,h)},
      obesityone:{low:calweight(30,h),high:calweight(34.9,h)},
      obesitytwo:{low:calweight(35,h),high:calweight(39.9,h)},
      obesitythree:{high:calweight(40,h)},

    };
    setBmiRange(range);
    setChangeWeight(weightChange(b,w,range));
    setshow(true)
  };
  const calcBmi=(w,h)=>(w/(h*h)).toFixed(2);
  const calweight=(b,h)=>(b*h*h).toFixed(2);
  const weightChange=(b,w,range)=>{
    let changeobj;
    if (b>24.9){
      changeobj={
        weight:(w-range.normal.high).toFixed(2),
        type:"positive",
      };
      return changeobj;
    }else if(b<18.5){
      changeobj={
        weight:(range.normal.low-w).toFixed(2),
        type:"negative"
      };
      return changeobj;
    }else {
      changeobj ={weight:0,type:"normal"};
      return changeobj;
  
    }
    };
  const weightType=(bmi)=>{
    if (bmi<18.5){
    return "under weight";
    }else if (18.5>bmi && bmi<24.9){
      return "Normal"
    }else if (bmi>24.9 && bmi<29.9){
      return "over weight"
    }
    else if (bmi>29.9 && bmi<34.9){
      return "obesity class 1"
    }else if (bmi>34.9 && bmi<39.9){
      return "obesity class 2"
    }else if (bmi>39.9){
      return "obesity class 3"
    }
  }
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-5    ">
          <Form getData={onFormSub} />
        </div>
        {show &&(
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-sm-6 mb-5">
            <Bmiscore bmino={bmi} bminame={bmitype} changeweight={changeweight} />
          </div>
          <div className="col-12 col-sm-6">
            <Bmilist range={bmirange} bmi={bmi}/>
          </div>
        </div>
        )}
      </div> 
    </div>
  );
}

export default App;
