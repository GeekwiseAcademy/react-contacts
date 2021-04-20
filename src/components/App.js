import React from "react";
import LoginPage from "./login"
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";
import { getContacts } from "../utils/contacts";

const mockContacts = [
  {
    "id": 1,
    "firstName": "Culley",
    "lastName": "Snelman",
    "profilePic": "https://i.pravatar.cc/300?u=1",
    "phoneNumber": "351-346-6140",
    "email": "csnelman0@blog.com",
    "address": "09 Eggendart Parkway"
  }, 
  {
    "id": 2,
    "firstName": "Tammara",
    "lastName": "Allcorn",
    "profilePic": "https://i.pravatar.cc/300?u=2",
    "phoneNumber": "676-783-9239",
    "email": "tallcorn1@senate.gov",
    "address": "78145 Brentwood Court"
  }, 
  {
    "id": 3,
    "firstName": "Cassandry",
    "lastName": "Roze",
    "profilePic": "https://i.pravatar.cc/300?u=3",
    "phoneNumber": "223-879-6692",
    "email": "croze2@w3.org",
    "address": "2079 Morrow Parkway"
  }, 
  {
    "id": 4,
    "firstName": "Koressa",
    "lastName": "Galey",
    "profilePic": "https://i.pravatar.cc/300?u=4",
    "phoneNumber": "761-858-5580",
    "email": "kgaley3@economist.com",
    "address": "5 Hanover Alley"
  }
];


class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      contacts: []
    }
  }

  componentDidMount() {
    const storedContacts = getContacts();

    this.setState({
      contacts: storedContacts.length ? storedContacts : mockContacts
    })
  }

  render() {
    return (
      <div>
        <LoginPage />
        <RegisterPage />
        <ContactsPage contacts={this.state.contacts} />
        <ContactDetailsPage contact={this.state.contacts[0]} />
        <ContactCreatePage />
      </div>
    );
  }
}

export default App;
