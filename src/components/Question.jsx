import React from "react";
import { arrowdown, arrowup } from "../helpers/icons";
import data from "../helpers/data";
import { useState } from "react";

const Card = () => {

  const [showdata , setShowdata] = useState(false)
 



  return (
    <div className="card-group">
      {data.map(({ id, question, answer }) => (
        <div className="card">
          <div className="ques-answer">
            <h5>{question}</h5>

            <button className="btn-minus" onClick={()=>setShowdata()}>
              {arrowup} {arrowdown}
            </button>
          </div>{

            setShowdata(!showdata) && (<p>{answer}</p>)
          }
          
        </div>
      ))}
    </div>
  );
};

export default Card;
