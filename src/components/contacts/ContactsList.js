import ContactCard from "./ContactCard"

const ContactList = ({ contacts=[] }) => {
    return (
        <div>
            {contacts.map((contact) => 
                <ContactCard 
                    key={contact.id}
                    firstName={contact.firstName} 
                    lastName={contact.lastName} 
                    phoneNumber={contact.phoneNumber} 
                    profilePic={contact.profilePic}
                />
            )}
        </div>
    )
}

export default ContactList;