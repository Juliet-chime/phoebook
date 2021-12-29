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
    <div className="col-md-7 col-sm-10 col-lg-5">
      {isEditing ? (
        <form onSubmit={handleEditFormSubmit}>
          <div className="mb-3">
            <label htmlFor="editfirstname">Edit Firstname</label>
            <input
              id="editfirstname"
              className="form-control"
              type="text"
              value={currentPerson.firstname}
              name="firstname"
              onChange={handleEditInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="editlastname">Edit Lastname</label>
            <input
              id="editlastname"
              className="form-control"
              type="text"
              value={currentPerson.lastname}
              name="lastname"
              onChange={handleEditInputChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="editphone"> Edit Phone</label>
            <input
              id="editphone"
              className="form-control"
              type="text"
              value={currentPerson.phone}
              name="phone"
              onChange={handleEditInputChange}
            />
          </div>
          <div className="mb-3 d-grid">
            <button className="btn btn-success block" type="submit">
              Update
            </button>
          </div>
        </form>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="firstname">First Name</label>
            <input
              id="firstname"
              className="form-control"
              type="text"
              value={person.firstname}
              name="firstname"
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="lastname">Last Name</label>
            <input
              id="lastname"
              className="form-control"
              type="text"
              value={person.lastname}
              name="lastname"
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="phone">Phone</label>
            <input
              id="phone"
              className="form-control"
              type="text"
              value={person.phone}
              name="phone"
              onChange={onChange}
            />
          </div>
          <div className=" d-grid mb-3">
            <button className="btn btn-primary block" type="submit">
              Add
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
