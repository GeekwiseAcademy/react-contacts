import { v4 as uuidv4 } from 'uuid';

export const getContacts = () => {
    const contacts = localStorage.getItem('contacts') ?? '[]';
    return JSON.parse(contacts);
}

export const addContact = ({ firstName, lastName, phoneNumber, email, address, profilePic }) => {
    let contacts = localStorage.getItem('contacts') ?? '[]';
    contacts = JSON.parse(contacts)

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
    let contacts = localStorage.getItem('contacts') ?? '[]';
    contacts = JSON.parse(contacts)
    contacts = contacts.filter((contact) => contact.id !== id);
    localStorage.setItem('contacts', JSON.stringify(contacts));
}
