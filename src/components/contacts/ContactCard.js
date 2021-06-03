import { Col, Row, Image } from "react-bootstrap";

const ContactCard = ({
    firstName = "",
    lastName = "",
    phoneNumber = "",
    profilePic = "",
}) => {
    return (
        <Row className="shadow rounded" style={{backgroundColor: 'white', margin: '1rem .75rem 0rem', padding: '.5rem'}}>
            <Col xs={3} style={{borderRight: 'thin solid grey', }}>
				<Image 
                    src={profilePic}
                    alt={`Profile of ${firstName} ${lastName}.`}
					roundedCircle
					fluid
                />
            </Col>
            <Col xs={8} className="my-auto" style={{color: 'black'}}>
                <span>
                    {firstName} {lastName}
                </span><br></br>
                <span>{phoneNumber}</span>
            </Col>
            <Col xs={1} className="my-auto">
				<i class="bi bi-x-circle-fill" style={{color: 'gray', fontSize:'1.5rem'}}></i>
            </Col>
        </Row>
    );
};

export default ContactCard;
