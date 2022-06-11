import React from "react";

const ContactList = ({ contact, onDelete }) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {/* <th scope="col">#ID</th> */}
            {/* <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">{contact.id}</td>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
            <td>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => onDelete(contact.id)}
              >
                Danger
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
