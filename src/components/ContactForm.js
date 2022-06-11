import React, { useState } from "react";

const ContactForm = ({ onAddContact }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const style = {
    backgroundColor: "",
    padding: "10px",
    border: " 2px solid red",
    borderRadius: "50px 20px",
    maxWidth: "90%",
    // display: "flex",
    // justifyContent: "center",
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Please fiil out the fields");
      return;
    }

    onAddContact({ name, email, phone });
    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="mt-5" style={style}>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input
            type="name"
            className="form-control"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input
            type="number"
            className="form-control"
            id="phone"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
