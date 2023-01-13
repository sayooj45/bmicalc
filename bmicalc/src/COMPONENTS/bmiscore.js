

function bmiscore({bmino,bminame,changeweight}) {
  // console.log(props)
  // const {bmino,bminame}=props;
  console.log(changeweight);
  return (
      <div className="text-center shadow rounded p-4">
    <div>Your BMI Score</div>
    <div className="row justify-content-md-center">
      <div className="p-3 my-2 alert fs-1 alert-primary col-sm-4">{bmino}</div>
    </div>
    <div className="fs-3 fw-bold text-primary">{bminame}</div>
    {changeweight.type ==="positive" &&(<div className="fs-4">"you need to lose <span className="fw-bold">{changeweight.weight}kg"</span></div>)}
    {changeweight.type ==="negative" &&(<div className="fs-4">"you need gain <span className="fw-bold">{changeweight.weight}kg"</span></div>)}
    {changeweight.type ==="normal" &&(<div className="fs-4">"you weight is Normal,good for you"</div>)}
  </div>
  )
}

export default bmiscore
