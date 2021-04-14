import { useState, useEffect } from 'react';

const STORAGE_KEY = 'itss';

function useStorage() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
    }, []);

    const addContact = contact => {
        contacts.push(contact);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
        setContacts(contacts);
    }

    const removeContact = id => {
        contacts.filter(contact => contact.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
        setContacts(contacts);
    }

    return [contacts, addContact, removeContact];
}

export default useStorage;