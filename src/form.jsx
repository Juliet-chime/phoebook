import { useState } from "react";

const Form = ({
  addPerson,
  isEditing,
  currentPerson,
  setCurrentPerson,
  handleUpdatePerson,
}) => {
  const [person, setPerson] = useState({
    id: 1,
    firstname: "",
    lastname: "",
    phone: "",
  });

  const onChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstname, lastname, phone } = person;
    if (firstname !== "" && lastname !== "" && phone !== "") {
      addPerson({ ...person });

      setPerson({
        ...person,
        id: person.id + 1,
        firstname: "",
        lastname: "",
        phone: "",
      });
    }
  };

  const handleEditFormSubmit = (e) => {
    e.preventDefault();
    handleUpdatePerson(currentPerson.id, currentPerson);
  };

  const handleEditInputChange = (e) => {
    setCurrentPerson({ ...currentPerson, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <div>
            <label htmlFor="">Edit Firstname</label>
            <input
              type="text"
              value={currentPerson.firstname}
              name="firstname"
              onChange={handleEditInputChange}
            />
          </div>

          <div>
            <label htmlFor="">Edit Lastname</label>
            <input
              type="text"
              value={currentPerson.lastname}
              name="lastname"
              onChange={handleEditInputChange}
            />
          </div>

          <div>
            <label htmlFor=""> Edit Phone</label>
            <input
              type="text"
              value={currentPerson.phone}
              name="phone"
              onChange={handleEditInputChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="">First Name</label>
            <input
              type="text"
              value={person.firstname}
              name="firstname"
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="">Last Name</label>
            <input
              type="text"
              value={person.lastname}
              name="lastname"
              onChange={onChange}
            />
          </div>

          <div>
            <label htmlFor="">Phone</label>
            <input
              type="text"
              value={person.phone}
              name="phone"
              onChange={onChange}
            />
          </div>
          <button type="submit">Save</button>
        </form>
      )}
    </div>
  );
};

export default Form;
