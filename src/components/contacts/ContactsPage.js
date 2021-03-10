import ContactsList from "./ContactsList";

const ContactsPage = ({ contacts=[] }) => {
    return <ContactsList contacts={contacts} />
}

export default ContactsPage;