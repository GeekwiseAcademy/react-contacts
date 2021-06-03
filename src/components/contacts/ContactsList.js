import { Container } from "react-bootstrap";
import ContactCard from "./ContactCard"

const ContactList = ({ contacts=[] }) => {
    return (
        <Container style={{backgroundColor: 'lightgrey', padding: '.25rem 0rem 1rem'}}>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </Container>
    )
}

export default ContactList;