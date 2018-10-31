import React, {Component} from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(contact => contact.id !== action.payload)
      };
    default:
      return state;
  }
};

export default class Provider extends Component{
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
      }],
    dispatch: action => {
      this.setState(state => reducer(state,action))
    }
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;