import { useState } from "react";

const Form = ({ addPerson }) => {
  const [person, setPerson] = useState({
    id: 0,
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
    addPerson({ ...person });
    setPerson({
      ...person,
      id: person.id + 1,
      firstname: "",
      lastname: "",
      phone: "",
    });
  };

  return (
    <div>
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
    </div>
  );
};

export default Form;
