import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact';

class Contacts extends Component {
  state = {
      contacts: [{
        id: 1,
        name: 'John Doe',
        email: 'johndoe@gmail.com',
        phone: '555-555-5555'
      },
        {
        id: 2,
        name: 'Karen Doe',
        email: 'karen@gmail.com',
        phone: '444-555-5555'
      },
        {
        id: 1,
        name: 'Henry Johnson',
        email: 'henryjohnson@gmail.com',
        phone: '333-555-5555'
      }]
  };
  render() {
    const {contacts} = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact key={contact.id} contact={contact}/>
        ))}
      </React.Fragment>
    );
  }
}

Contacts.propTypes = {};

export default Contacts;