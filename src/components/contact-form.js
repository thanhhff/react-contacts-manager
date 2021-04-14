import React, { useState, useContext } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import _ from "lodash";

import useStorage from "../hooks/storage";

import {getKey} from "../lib/util";

function ContactForm( {items, putItems} ) {
  const name = useFormInput("");
  const email = useFormInput("");

  const onSubmit = () => {
    putItems([...items, { key: getKey(), name: name.value, email: email.value, select: false }]);
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

export default ContactForm;