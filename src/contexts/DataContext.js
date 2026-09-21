import React, { createContext, useState } from 'react';

export const DataContext = createContext();

export function DataProvider({ children }) {
  const [users, setUsers] = useState([]);

  // Dados iniciais em formato de array conforme protótipo
  const [contacts, setContacts] = useState([
    { id: '1', nome: 'Marco Aurélio', email: 'marco@email.com', telefone: '81 988553424' },
    { id: '2', nome: 'Patrícia Abravanel', email: 'patricia@email.com', telefone: '81 998765332' },
    { id: '3', nome: 'Rodrigo Santoro', email: 'rodrigo@email.com', telefone: '81 987765525' },
  ]);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now().toString() }]);
  };

  const addContact = (contact) => {
    setContacts([...contacts, { ...contact, id: Date.now().toString() }]);
  };

  const updateContact = (id, updatedContact) => {
    setContacts(contacts.map(c => (c.id === id ? { ...c, ...updatedContact } : c)));
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter(c => c.id !== id));
  };

  return (
    <DataContext.Provider value={{
      users, contacts, addUser, addContact, updateContact, deleteContact
    }}>
      {children}
    </DataContext.Provider>
  );
}