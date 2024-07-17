import React, {useEffect, useState} from "react";
// import { useEffect, useState } from "react";
import ContactRow from "../ContactRow/ContactRow";

// const dummyContacts = [
//     { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
//     { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
//     { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
//   ];

function ContactList({setSelectedContactId}) {
  const [contacts, setContacts] = useState([]);
  // const {selectedContactId, setSelectedContactId} = useState (null);
  useEffect(() => {
    async function fetchContacts() {
      try {
        const res = await fetch(
          "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
        );
        const json = await res.json();
        console.log(json);
        setContacts(json);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContacts();
  }, []);

  // console.log(contacts);

  return (
    <>
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <ContactRow
              key={contact.id}
              contact={contact}
              setSelectedContactId={setSelectedContactId}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ContactList;
