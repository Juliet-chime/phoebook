import { useState } from "react";
import Form from "./form";

const Phonebook = () => {
  const [persons, setPersons] = useState([]);

  const addPerson = (person) => {
    const { firstname, lastname, phone } = person;
    if (firstname !== "" && lastname !== "" && phone !== "") {
      setPersons([...persons, person]);
    }
  };

  const removePerson = (id) =>
    setPersons(persons.filter((person) => person.id !== id));

  return (
    <div>
      <Form addPerson={addPerson}></Form>
      <table>
        <tbody>
          <tr>
            <th>S/N</th>
            <th>FirstName</th>
            <th>LastName</th>
            <th colSpan={10}>Phone</th>
            <th colSpan>Action</th>
          </tr>
          {persons.map((p, index) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.firstname}</td>
              <td>{p.lastname}</td>
              <td>{p.phone}</td>
              <td>
                <button onClick={() => removePerson(p.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Phonebook;
