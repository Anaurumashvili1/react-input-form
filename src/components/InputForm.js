import "./InputForm.css";
import React, { useState } from "react";
import ErrorModal from "./ErrorModal";

const InputForm = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredData = {
      name: inputName,
      age: +inputAge,
    };
    if (inputName.trim().length === 0 || inputAge.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid name and age (non-empty valiues)",
      });
      return;
    }
    if (+inputAge < 1) {
      setError({
        title: "Invald Age",
        message: "Please enter a valid age (>0)",
      });
      return;
    }
    props.onSavePersonsData(enteredData);
    setInputAge("");
    setInputName("");
  };
  const nameChangeHandler = (event) => {
    setInputName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}

      <form className="form" onSubmit={submitHandler}>
        <div className="new-person-form">
          <div className="new-person-controls">
            <label>Username</label>
            <input type="text" value={inputName} onChange={nameChangeHandler} />
          </div>
          <div className="new-person-controls">
            <label>Age(Years)</label>
            <input type="number" value={inputAge} onChange={ageChangeHandler} />
          </div>
          <div className="new-person-action">
            <button type="submit">Add User</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputForm;
