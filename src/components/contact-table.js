import React, { useState, useContext } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";
import { ContactContext } from "./contact-context";

export default function ContactTable() {
  const [state, dispatch] = useContext(ContactContext);

  const [selectedId, setSelectedId] = useState();

  const delContact = id => {
    dispatch({
      type: "DEL_CONTACT",
      payload: id
    });
  };

  const onRemoveUser = () => {
    delContact(selectedId);
    setSelectedId(null); // Clear selection
  };

  const rows = state.contacts.map(contact => (
    <Table.Row
      key={contact.id}
      onClick={() => setSelectedId(contact.id)}
      active={contact.id === selectedId}
    >
      <Table.Cell>{contact.id}</Table.Cell>
      <Table.Cell>{contact.name}</Table.Cell>
      <Table.Cell>{contact.email}</Table.Cell>
    </Table.Row>
  ));

  return (
    // TODO: viết table 
    <div>
    Test
    </div>
  );
}