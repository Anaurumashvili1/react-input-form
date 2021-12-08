import "./PeoplesList.css";

const PeoplesList = (props) => {
  return (
    <ul className="peoples-list">
      {props.items.map((item) => (
        <li className="person-box" key={item.id}>
          {item.name} ({item.age} years old)
        </li>
      ))}
    </ul>
  );
};

export default PeoplesList;
