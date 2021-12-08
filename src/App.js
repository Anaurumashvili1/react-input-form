import React, { useState } from "react";
import NewPerson from "./components/NewPerson";
import PeoplesList from "./components/PeoplesList";
const DUMMY_DATA = [];
function App() {
  const [persons, setPersons] = useState(DUMMY_DATA);

  const addPersonHandler = (person) => {
    setPersons((prevPersons) => {
      return [person, ...prevPersons];
    });
  };

  return (
    <div>
      <NewPerson onAddPerson={addPersonHandler} />
      <PeoplesList items={persons} />
    </div>
  );
}

export default App;
