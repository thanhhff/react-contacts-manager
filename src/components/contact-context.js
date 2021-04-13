import React, { useReducer, createContext } from "react";

export const ContactContext = createContext();

const initialState = {
  contacts: [
    {
      id: "01",
      name: "Test 01",
      email: "test@gmail.com"
    },
    {
      id: "02",
      name: "Test 02",
      email: "test@gmail.com"
    },
    {
      id: "03",
      name: "Test 03",
      email: "test@gmail.com"
    }
  ],
  loading: false,
  error: null
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

export const ContactContextProvider = props => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ContactContext.Provider value={[state, dispatch]}>
      {props.children}
    </ContactContext.Provider>
  );
};