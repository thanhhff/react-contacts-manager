import { Table } from "semantic-ui-react";

function ContactItem( {contact, onClick} ) {
  const handleChange = () => {
    onClick(contact)
  }
  
  return (
    <Table.Row
      key={contact.id}
      onClick={handleChange}
      active={contact.select}
    >
      <Table.Cell>{contact.name}</Table.Cell>
      <Table.Cell>{contact.email}</Table.Cell>
    </Table.Row>
  );
}

export default ContactItem;