import React from "react";

const ContactList = ({ contact }) => {
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{contact.id}</th>
            <td>{contact.name}</td>
            <td>{contact.email}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ContactList;
