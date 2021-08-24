import { v4 as uuidv4 } from 'uuid';

export const getContacts = () => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) ?? [];
    return contacts;
}

export const createContact = ({ firstName, lastName, phoneNumber, email, address, profilePic }) => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) ?? [];

    const newContact = {
        id: uuidv4(),
        firstName,
        lastName,
        phoneNumber,
        email,
        address,
        profilePic
    };

    contacts.push(newContact);
    localStorage.setItem('contacts', JSON.stringify(contacts));
    
    return newContact;
}

export const deleteContact = (id) => {
    const contacts = JSON.parse(localStorage.getItem('contacts')) ?? [];
    const newContacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
}
