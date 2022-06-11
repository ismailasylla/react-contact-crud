import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactList from "./ContactList";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const apiUrl = "http://localhost:3006/contacts";

  const getContacts = async () => {
    const res = await axios.get(apiUrl);
    const result = res.data;
    setContacts(result);
  };

  useEffect(() => {
    getContacts();
  }, []);

  const deleteHandler = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <>
      {contacts.map((contact) => (
        <ContactList
          key={contact.id}
          contact={contact}
          onDelete={deleteHandler}
        />
      ))}
    </>
  );
};

export default Contact;
