import React from "react";

function Results({ formData }) {
  return <div>{formData.map((item) => console.log(item))}</div>;
}

export default Results;
