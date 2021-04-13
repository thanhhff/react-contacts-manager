/*global localStorage */

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'itss';

function useStorage() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        const data = localStorage.getItem(STORAGE_KEY);

        if (!data) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        } else {
            setContacts(data);
        }
    }, [])

    const addContact = contacts => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([contacts]));
        setContacts(contacts);
    }

    const removeContact = () => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify([]));
        setContacts([])
    }

    return [contacts, addContact, removeContact];
}

export default useStorage;