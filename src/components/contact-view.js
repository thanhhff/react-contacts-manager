import React from "react";
import { Segment, Header } from "semantic-ui-react";
import ContactForm from "./contact-form";
import ContactTable from "./contact-table";
import {ContactContextProvider} from "./contact-context"

export default function Contacts() {
  return (
    <ContactContextProvider>
      <Segment basic>
        <Header as="h3">連絡先</Header>
        <ContactForm />
        <ContactTable />
      </Segment>
    </ContactContextProvider>
  );
}