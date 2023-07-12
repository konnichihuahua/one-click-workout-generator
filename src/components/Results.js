import React from "react";

function Results({ results }) {
  const generateResults = () => {
    results.map((result) => {
      console.log(result);
    });
  };
  return <div className="p-10 flex self-center justify-center flex-col"></div>;
}
export default Results;
