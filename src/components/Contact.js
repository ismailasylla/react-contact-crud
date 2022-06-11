import React, { useEffect, useState } from "react";
import axios from "axios";
import ContactList from "./ContactList";
import { NIL as NIL_UUID } from "uuid";
import ContactForm from "./ContactForm";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  const apiUrl = "http://localhost:3006/contacts";

  const getContacts = async () => {
    const res = await axios.get(apiUrl);
    const data = res.data;
    setContacts(data);
  };

  useEffect(() => {
    getContacts();
  }, []);

  const addContact = async (contact) => {
    console.log(contact);
    const id = Math.floor(Math.random() * 10000);

    const request = {
      id,
      ...contact,
    };

    const response = await axios.post(apiUrl, request);
    console.log(response);
    setContacts([...contacts, response.data]);
  };

  const deleteHandler = async (id) => {
    await axios.delete(`${apiUrl}/${id}`);
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList);
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
      <ContactForm onAddContact={addContact} />
    </>
  );
};

export default Contact;
