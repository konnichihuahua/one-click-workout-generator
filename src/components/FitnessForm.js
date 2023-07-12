import React, { useState } from "react";

const FitnessForm = ({ setShowResults, sendToGPT }) => {
  const [fitnessGoals, setFitnessGoals] = useState("Weight Loss");
  const [fitnessLevel, setFitnessLevel] = useState("Beginner");
  const [workoutEquipment, setWorkoutEquipment] = useState("");
  const [workoutDuration, setWorkoutDuration] = useState("Short");
  const [workoutDays, setWorkoutDays] = useState("3");
  const [specificPreferences, setSpecificPreferences] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [medicalConditions, setMedicalConditions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process the form data
    const formData = {
      fitnessGoals,
      fitnessLevel,
      workoutEquipment,
      workoutDuration,
      workoutDays,
      specificPreferences,
      height,
      weight,
      age,
      medicalConditions,
    };

    sendToGPT(formData);

    setShowResults(true);
    // Send the form data to your app's backend for further processing

    // Clear the form after submission
    setFitnessGoals("");
    setFitnessLevel("");
    setWorkoutEquipment("");
    setWorkoutDuration("");
    setWorkoutDays("");
    setSpecificPreferences("");
    setHeight("");
    setWeight("");
    setAge("");
    setMedicalConditions("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <div className="container flex gap-4">
        <div className="flex flex-col">
          <label className="text-2xl mb-2">Workout Information</label>
          <label>Fitness Goal: </label>
          <select
            value={fitnessGoals}
            onChange={(e) => setFitnessGoals(e.target.value)}
          >
            <option value="Weight Loss">Weight Loss</option>
            <option value="Muscle Gain">Muscle Gain</option>
            <option value="Improve Fitness">Improve Fitness</option>
          </select>

          <label>Fitness Level: </label>
          <select
            value={fitnessLevel}
            onChange={(e) => setFitnessLevel(e.target.value)}
          >
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
          <label>Workout Duration: </label>
          <select
            value={workoutDuration}
            onChange={(e) => setWorkoutDuration(e.target.value)}
          >
            <option value="Short">Short (25 minutes or less) </option>
            <option value="Medium">1 Hour</option>
            <option value="Long">1.5 hours</option>
          </select>
          <label>How many workout days per week? </label>
          <input
            type="number"
            value={workoutDays}
            onChange={(e) => setWorkoutDays(e.target.value)}
          />
          <label>
            {" "}
            Workout Equipment(s):
            <div className="text-xs text-gray-300">
              Enter your available workout equipments at home. Separated by
              coma.
            </div>
          </label>
          <textarea
            className="h-20 p-2 text-xs"
            value={workoutEquipment}
            onChange={(e) => setWorkoutEquipment(e.target.value)}
            placeholder="dumbbells, gymnastic rings, barbells"
          />

          <label>
            Specific Preference(s):
            <div className="text-xs text-gray-300">
              Enter specific preferences such as HIIT, PPL, or full body
              workout.
            </div>
          </label>
          <textarea
            className="h-20 p-2 text-xs"
            value={specificPreferences}
            onChange={(e) => setSpecificPreferences(e.target.value)}
            placeholder="leave blank if none"
          />
        </div>

        <div className="personal-info flex flex-col">
          <label className="text-2xl mb-2">Personal Information</label>
          <label>Height(cm): </label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
          <label>Weight:(lbs) </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
          <label>Age: </label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label>
            {" "}
            Medical Conditions:
            <div className="text-xs text-gray-300">
              Enter medical conditions that can affect your workout, such as
              back pain and arthritis.
            </div>
          </label>

          <textarea
            className="h-20 p-2 text-xs "
            value={medicalConditions}
            onChange={(e) => setMedicalConditions(e.target.value)}
            placeholder="leave blank if none"
          />
        </div>
      </div>
      <button type="submit" className="p-8 bg-blue-600 rounded m-4">
        Generate Workout Program
      </button>
    </form>
  );
};

export default FitnessForm;
