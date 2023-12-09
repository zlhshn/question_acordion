import Ouestion from "./Question";
import data from "../helpers/data";

const InterviewAccord = () => {
  return (
    <div className="row">
      {
        data.map((item,i)=>(
          <Ouestion key={i} {...item}/>
        ))

        
      }
      
    </div>
  );
};

export default InterviewAccord;