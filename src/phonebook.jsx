import { useEffect, useState } from "react";
import Form from "./form";

const Phonebook = () => {
  const [persons, setPersons] = useState(() => {
    const existingPersons = localStorage.getItem("persons");

    if (existingPersons) {
      return JSON.parse(existingPersons);
    } else {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentPerson, setCurrentPerson] = useState({});

  const addPerson = (person) => {
    setPersons([...persons, person]);
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
    <div className="container">
      <Form
        addPerson={addPerson}
        isEditing={isEditing}
        currentPerson={currentPerson}
        setCurrentPerson={setCurrentPerson}
        handleUpdatePerson={handleUpdatePerson}
      ></Form>
      <div className="table-responsive col-sm-12 col-md-9 col-lg-6 ">
        <table className=" table border-primary table-bordered ">
          <tbody>
            <tr>
              <th>#</th>
              <th colSpan={1}>First Name</th>
              <th colSpan={1}>Last Name</th>
              <th colSpan={1}>Mobile Number</th>
              <th colSpan={2}>Action</th>
            </tr>
            {persons.map((person) => (
              <tr key={person.id}>
                <td>{person.id}</td>
                <td>{person.firstname}</td>
                <td>{person.lastname}</td>
                <td>{person.phone}</td>
                <td>
                  <button
                    className="btn btn-warning"
                    onClick={() => handleEditClick(person)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => removePerson(person.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Phonebook;
