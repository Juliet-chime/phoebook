import { useState } from "react";
import Form from "./form";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [currentPerson, setCurrentPerson] = useState({});

  const addPerson = (person) => {
    const { firstname, lastname, phone } = person;
    if (firstname !== "" && lastname !== "" && phone !== "") {
      setPersons([...persons, person]);
    }
  };

  const handleEditClick = (person) => {
    setIsEditing(true);
    setCurrentPerson({ ...person });
  };

  const handleUpdatePerson = (id, updatedPerson) => {
    const updatedItem = persons.map((person) =>
      person.id === id ? updatedPerson : person
    );
    setIsEditing(false);
    setPersons(updatedItem);
  };

  const removePerson = (id) =>
    setPersons(persons.filter((person) => person.id !== id));

  return (
    <div>
      <Form
        addPerson={addPerson}
        isEditing={isEditing}
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
        handleUpdatePerson={handleUpdatePerson}
      ></Form>
      <table>
        <tbody>
          <tr>
            <th>S/N</th>
            <th colSpan={1}>FirstName</th>
            <th colSpan={1}>LastName</th>
            <th colSpan={1}>Phone</th>
            <th colSpan={2}>Action</th>
          </tr>
          {persons.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstname}</td>
              <td>{person.lastname}</td>
              <td>{person.phone}</td>
              <td>
                <button onClick={() => handleEditClick(person)}>Edit</button>
              </td>
              <td>
                <button onClick={() => removePerson(person.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Phonebook;
