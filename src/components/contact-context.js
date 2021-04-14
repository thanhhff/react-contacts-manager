import React, { useReducer, createContext } from "react";
import useStorage from '../hooks/storage';

export const ContactContext = createContext();

export const ContactContextProvider = props => {
  const [contacts] = useStorage();
  const initialState = {
    contacts,
    error: null,
    loading: false,
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  
  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};

const reducer = (state, action) => {
  // TODO: viết hàm sử dụng useReducer 
  switch (action.type) {
    case "ADD_CONTACT":
      return {
        contacts: [...state.contacts, action.payload]
      };
    case "DEL_CONTACT":
      return {
        contacts: state.contacts.filter(
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