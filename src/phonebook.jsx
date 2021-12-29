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

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResult, setFilteredResults] = useState([]);

  useEffect(() => {
    localStorage.setItem("persons", JSON.stringify(persons));
  }, [persons]);

  const [isEditing, setIsEditing] = useState(false);
  const [currentPerson, setCurrentPerson] = useState({});

  const addPerson = (person) => {
    setPersons([...persons, person]);
  };

  const searchPersons = (term) => {
    setSearchTerm(term);
    if (searchTerm !== "") {
      const filteredData = persons.filter((person) =>
        Object.values(person).join("").toLowerCase().includes(searchTerm)
      );
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(persons);
    }
  };

  const searchTermInputHandler = (e) => {
    searchPersons(e.target.value);
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
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-8"></div>
        <div className="mb-3 col-lg-4 ">
          <input
            id="firstname"
            className="form-control"
            type="text"
            value={searchTerm}
            placeholder="Search Name..."
            onChange={searchTermInputHandler}
          />
        </div>

        <div className="col-md-6 col-sm-10 col-lg-3">
          <Form
            addPerson={addPerson}
            isEditing={isEditing}
            currentPerson={currentPerson}
            setCurrentPerson={setCurrentPerson}
            handleUpdatePerson={handleUpdatePerson}
            persons={persons}
          ></Form>
        </div>
        <div className="col lg-2"></div>
        <div className="table-responsive col-sm-12 col-md-6 col-lg-7 ">
          <table className=" table border-primary table-bordered ">
            <tbody>
              <tr>
                <th>#</th>
                <th colSpan={1}>First Name</th>
                <th colSpan={1}>Last Name</th>
                <th colSpan={1}>Mobile Number</th>
                <th colSpan={2}>Action</th>
              </tr>
              {searchTerm.length > 1
                ? filteredResult.map((person) => (
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
                  ))
                : persons.map((person) => (
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
    </div>
  );
};

export default Phonebook;
