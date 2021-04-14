import React, { useState, useContext } from "react";
import { Segment, Table, Button, Icon } from "semantic-ui-react";

import ContactItem from './contact-item'

function ContactTable( {items, putItems, clearItems} ) {
  
  
  const handleChange = checked => {
    const newItems = items.map(item => {
      if (item.key === checked.key) {
        item.select = !item.select;
      }
      return item;
    });
    putItems(newItems);
  };


  const rows = items.map(contact => (
    <ContactItem 
      key = {contact.key}
      contact={contact}
      onClick={handleChange}
    />
  ));

  return (
    <Segment>
      <Table celled striped selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>{rows}</Table.Body>
        <Table.Footer fullWidth>
          <Table.Row>
            <Table.HeaderCell />
            <Table.HeaderCell colSpan="4">
              <Button
                floated="right"
                icon
                labelPosition="left"
                color="red"
                size="small"
                onClick={clearItems}
              >
                <Icon name="trash" /> 削除
              </Button>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </Segment>
  );
}

export default ContactTable;
