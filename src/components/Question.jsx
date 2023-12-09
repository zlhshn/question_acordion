import React from "react";
import { arrowdown, arrowup } from "../helpers/icons";
import { useState } from "react";

const Card = (data) => {


  const [showdata , setShowdata] = useState(false)

console.log();

  return (
    <div className="card-group">
      {
        <div key={data.id} className="card">
          <div className="ques-answer">
            <h5>{data.question}</h5>

            <button className="btn-minus" onClick={()=>setShowdata(!showdata)} >
             {showdata ? arrowup:arrowdown }
            </button>

            
          </div>
          {showdata && <p> {data.answer}</p>}
        </div>
      }
    </div>
  );
};

export default Card;
