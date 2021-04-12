import React, { useState, useContext } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import _ from "lodash";
import { ContactContext } from "./contact-context";

export default function ContactForm() {
  const name = useFormInput("");
  const email = useFormInput("");
  const [state, dispatch] = useContext(ContactContext);

  const onSubmit = () => {
    dispatch({
      type: "ADD_CONTACT",
      payload: { id: _.uniqueId(10), name: name.value, email: email.value }
    });
    // Reset Form
    name.onReset();
    email.onReset();
  };

  return (
    // TODO: viết hàm để thêm Contacts 
    <div>
      Test
    </div>
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