import React from "react";

const ContactForm = () => {
  const style = {
    backgroundColor: "",
    padding: "10px",
    border: " 2px solid red",
    borderRadius: "50px 20px",
    maxWidth: "90%",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <div className="mt-5" style={style}>
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Name
          </label>
          <input type="name" className="form-control" id="name" />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
          />
        </div>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Phone Number
          </label>
          <input type="number" className="form-control" id="phone" />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Contact
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
