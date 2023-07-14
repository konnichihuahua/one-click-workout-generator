import React from "react";
import JsPDF from "jspdf";

function Results({ results }) {
  const generatePDF = () => {
    const report = new JsPDF("portrait", "pt", "a4");
    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });
  };
  return (
    <div
      className="flex self-center justify-center flex-col p-10 bg-white text-black"
      id="report"
    >
      {Object.keys(results).map((day) => (
        <div key={day} className="">
          <h3 className="text-2xl ">Workout for {day}</h3>
          <p className="mb-2">{results[day].workoutDescription}</p>
          <p>Exercises:</p>
          <ul>
            {results[day].exercises.map((exercise, index) => (
              <li className="mb-2" key={index}>
                <strong>{exercise.name}</strong>
                <p>
                  {exercise.reps} reps, {exercise.sets} sets, {exercise.rest}{" "}
                  rest
                </p>
              </li>
            ))}
          </ul>
        </div>
      ))}
      <button onClick={generatePDF}> generate pdf</button>
    </div>
  );
}
export default Results;
