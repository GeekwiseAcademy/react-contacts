const ContactCard = ({ firstName='', lastName='', phoneNumber='', profilePic='' }) => {
    return (
        <div>
            <div>
                <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
            </div>
            <div>
                <p>{firstName} {lastName}</p>
                <p>{phoneNumber}</p>
            </div>
            <div>
                <button>x</button>
            </div>
        </div>
    )
}

export default ContactCard;