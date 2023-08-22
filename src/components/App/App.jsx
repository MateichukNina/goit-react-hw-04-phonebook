import React, { useEffect, useState } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactsList } from '../ContactsList/ContactsList';
import { Filter } from '../Filter/Filter';
import { AppWrapper } from './App.styled';



export const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts !== null) {
      return JSON.parse(savedContacts);
    }
    return [];
  });


  const [filter, setFilter] = useState('');
  

  useEffect(( ) => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  
  

  const addContact = newContact => {
    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleFilterChange = evt => {
    const search = evt.currentTarget.value;
    setFilter(search);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const selectedContact = filter
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filter.toLowerCase())
      )
    : contacts;

  return (
    <AppWrapper>
      <ContactForm addContact={addContact} />
      <Filter filter={filter} newContact={handleFilterChange} />
      <ContactsList selectedContact={selectedContact} deleteContact={deleteContact} />
    </AppWrapper>
  );
};
