import React from "react";
import { Document, Page, View } from "@react-pdf/renderer";

function Results({ results }) {
  return (
    <div className="flex self-center justify-center flex-col p-10 bg-white text-black">
      <Document>
        <Page size="A4" className="flex">
          <View className="m-5 p-5 flex-grow">
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
                        {exercise.reps} reps, {exercise.sets} sets,{" "}
                        {exercise.rest} rest
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </View>
        </Page>
      </Document>
    </div>
  );
}
export default Results;
