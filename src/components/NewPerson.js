import "./NewPerson.css";
import InputForm from "./InputForm";

const NewPerson = (props) => {
  const savePersonsDataHandler = (enteredData) => {
    const perosnsData = {
      ...enteredData,
      id: Math.random().toString(),
    };
    props.onAddPerson(perosnsData);
  };

  return (
    <div>
      <InputForm onSavePersonsData={savePersonsDataHandler} />
    </div>
  );
};

export default NewPerson;
