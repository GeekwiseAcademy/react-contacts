const  ContactDetailsCard = ({ contact }) => {
    return (
        <div>
            <div>
                <img src={contact?.profilePic} alt={`Profile of ${contact?.firstName}${contact?.lastName}.`}/>
            </div>
            <div>
                <p>{contact?.firstName} {contact?.lastName}</p>
                <dl>
                    <dt>Phone Number</dt>
                    <dd>{contact?.phoneNumber}</dd>

                    <dt>Email</dt>
                    <dd>{contact?.email}</dd>

                    <dt>Address</dt>
                    <dd>{contact?.address}</dd>
                </dl>
            </div>
        </div>
    )
}

export default ContactDetailsCard;