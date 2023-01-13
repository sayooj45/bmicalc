import React from 'react'

function bmilist({range,bmi}) {
  return (
    <div className="text-center shadow-sm rounded">
      <ul className="list-group">
      <li className="list-group-item">
        <div className="row">
          <div className="col-4 fw-bold">TYPE</div>
          <div className="col-4 fw-bold">BMI</div>
          <div className="col-4 fw-bold">WEIGHT</div>
        </div>
      </li>
      <li className={bmi <18.5?"border border-danger border-3 list group-item ":"list-group-item"}>
        <div className="row">
          <div className="col-4">UNDER WEIGHT</div>
          <div className="col-4">&lt;18.5</div>
          <div className="col-4">&lt;{range.underweight.low}kg</div>
        </div>
      </li>
      <li className={bmi >18.5 && bmi< 24.9?"border border-danger border-3 list group-item ":"list-group-item"}>
        <div className="row">
          <div className="col-4">NORMAL</div>
          <div className="col-4">18.5-24.9</div>
          <div className="col-4">{range.normal.low + "kg -" + range.normal.high +"kg"}</div>
        </div>
      </li>
      <li className={bmi >24.9 && bmi< 29.9?"border border-danger border-3 list group-item ":"list-group-item"}>
        <div className="row">
          <div className="col-4">OVER WEIGHT</div>
          <div className="col-4">24.9-29.9</div>
          <div className="col-4">{range.overweight.low + "kg -" + range.overweight.high +"kg"}</div>
        </div>
      </li>
      <li className={bmi >29.9 && bmi< 34.9?"border border-danger border-3 list group-item ":"list-group-item"}>
        <div className="row">
          <div className="col-4">OBESITY CLASS 1</div>
          <div className="col-4">29.9-34.9</div>
          <div className="col-4">{range.obesityone.low + "kg -" + range.obesityone.high  +"kg"}</div>
        </div>
      </li>
      <li className={bmi >34.9 && bmi< 39.9?"border border-danger border-3 list group-item ":"list-group-item"}>
        <div className="row">
          <div className="col-4">OBESITY CLASS 2</div>
          <div className="col-4">34.9-39.9</div>
          <div className="col-4">{range.obesitytwo.low + "kg -" + range.obesitytwo.high +"kg"}</div>
        </div>
      </li> <li className={bmi >39.5? "border border-danger border-3 list group-item ":"list-group-item"}>
        <div className="row">
          <div className="col-4">OBESITY CLASS 3</div>
          <div className="col-4">&gt;39.9</div>
          <div className="col-4">{">" + range.obesitythree.high + "kg"}</div>
        </div>
      </li>
      </ul>
    </div>
  )
}

export default bmilist
