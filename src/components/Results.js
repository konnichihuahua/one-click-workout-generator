import React from "react";
import JsPDF from "jspdf";

function Results({ results }) {
  const generatePDF = () => {
    const report = new JsPDF("landscape", "pt", "legal");

    report.html(document.querySelector("#report")).then(() => {
      report.save("report.pdf");
    });
  };
  return (
    <div>
      <div
        className="document flex self-center flex-col bg-white text-black"
        id="report"
      >
        <div className="py-5 pl-5 bg-blue-800 text-white text-2xl font-black">
          {" "}
          One Page Workout Routine
        </div>
        <div className="flex justify-center items-center">
          {Object.keys(results).map((day) => (
            <div key={day} className="pl-5 py-5">
              <h3 className="text-xl">Workout for {day}</h3>
              <p className="mb-2">{results[day].workoutDescription}</p>
              <p>Exercises:</p>
              <ul>
                {results[day].exercises.map((exercise, index) => (
                  <li key={index}>
                    <strong>{exercise.name}</strong>
                    <p>
                      {exercise.reps} reps, {exercise.sets} sets,{" "}
                      {exercise.rest} rest
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <button onClick={generatePDF}> Generate pdf</button>
    </div>
  );
}
export default Results;
