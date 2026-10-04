import { useState } from "react";
import "./lol.css"

 
     

function Lolusestate() {
const [message, setMessage] = useState("Asslam-u-Alikum")




  function changeMessage() {

   if (message === "Asslam-u-Alikum") {
      setMessage("Double click to see a secret");

    } else {
      setMessage("Asslam-u-Alikum");

    }
  
  }

  return (
    <div className="event-container">
      <h1 className="event-title">My Event App</h1>

      <p className="event-text">
        {message}
      </p>

      <button className="event-btn"  onClick={changeMessage}>
        Click Me →
      </button>
    </div>
  );
}

export default Lolusestate;
