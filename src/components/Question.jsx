import React from "react";
import { arrowdown, arrowup } from "../helper/icons";
const Card = () => {
  return (
    <div className="card-group">
        <div className="card">
          <div className="ques-answer">
            <h5>
              Question
            </h5>
            <button className="btn-minus">
              {arrowup} {arrowdown}
            </button>
          </div>
          <p>answer</p>
        </div>
    </div>
  );
};

export default Card;