import React from "react";
import info from "../res/info.json";
import JobDetail from "./JobDetail";

const JobTiles = () => {
  let arr = [];
  const getDeals = () => {
    for (let x in info) arr.push(info[x]);
  };

  const Gatherer = () => {
    getDeals();
    arr.forEach(e => {
      return [e["time"], e["about"]];
      // return <JobDetail title={e["time"]} desc={e["about"]} />;
    });
  }

    let temp = Gatherer;
    console.log(temp);
    return (
      <JobDetail title={temp[0]} desc={temp[1]} />);
    
};

export default JobTiles;
