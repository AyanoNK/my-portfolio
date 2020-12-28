import React, { Component , useState} from "react";
import "./styles/JobTile.css";
import info from "../res/info.json";

const JobTile = () => {

  let arr = []
  function getDeals (){
    for (let x in info) arr.append(x);
    console.log(arr);
  }

  const [title, setTitle] = useState(info["proy1"]);
  const [desc, setDesc] = useState("desc");



    return (
      <div className="cool">
        <h1>{title}</h1>
        <img src="https://picsum.photos/100/100" alt="img" />
        <h4>{desc}</h4>
      </div>
    );
  
}

export default JobTile;