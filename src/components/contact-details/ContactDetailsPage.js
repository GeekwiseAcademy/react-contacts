import ContactDetailsCard from "./ContactDetailsCard";

const ContactDetailsPage = ({ contact }) => {
    return (
        <div>
            <ContactDetailsCard contact={contact} />
        </div>
    )
}

export default ContactDetailsPage;