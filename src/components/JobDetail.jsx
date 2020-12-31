import React from "react";
import "./styles/JobTile.css";


const JobDetail = (props) => {

    return (
        <div className="cool">
          <h1>{props.title}</h1>
          <img src="https://picsum.photos/100/100" alt="img" />
          <h4>{props.desc}</h4>
        </div>
      );

}

export default JobDetail;