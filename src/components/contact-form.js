import React, { useState, useContext } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import _ from "lodash";
import { ContactContext } from "./contact-context";
import useStorage from "../hooks/storage";

export default function ContactForm() {
  const name = useFormInput("");
  const email = useFormInput("");
  const [state, dispatch] = useContext(ContactContext);
  const [contacts, addContact] = useStorage();

  const onSubmit = () => {
    dispatch({
      type: "ADD_CONTACT",
      payload: { id: _.uniqueId(10), name: name.value, email: email.value },
    });
    // Reset Form
    addContact({ id: _.uniqueId(10)-1, name: name.value, email: email.value });
    name.onReset();
    email.onReset();
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <Input placeholder="名前" {...name} required />
          </Form.Field>
          <Form.Field width={6}>
            <Input placeholder="メール" {...email} type="email" required />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              新しいコンタクト
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
  };

  return {
    value,
    onChange: handleChange,
    onReset: handleReset
  };
}