import React, { useReducer, createContext } from "react";
import useStorage from '../hooks/storage';

export const ContactContext = createContext();

const [contacts, addContact, removeContact] = useStorage();


const reducer = (contacts, action) => {
  // TODO: viết hàm sử dụng useReducer 
  switch (action.type) {
    case "ADD_CONTACT":
      addContact([ ...contacts, action.payload]);
      return {
        contacts: [ ...contacts, action.payload]
      };
    case "DEL_CONTACT":
      removeContact(action.payload);
      return {
        contacts: contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    case "START":
      return {
        loading: true
      };
    case "COMPLETE":
      return {
        loading: false
      };
    default:
      throw new Error();
  }
};

export const ContactContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, contacts);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};