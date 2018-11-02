import React, {Component} from 'react';
import {Consumer} from '../../context';
import uuid from 'uuid';
import TextInputGroup from '../layout/TextInputGroup';

class AddContact extends Component {
  state = {
    name: '',
    email: '',
    phone: ''
  };

  onChange = e => this.setState({[e.target.name] : e.target.value});
  onSubmit = (dispatch, e) => {
    e.preventDefault();
    const {name, email, phone} = this.state;
    const newContact = {
      id: uuid(),
      name,
      email,
      phone
    }
    dispatch({type: 'ADD_CONTACT', payload: newContact});

    this.setState({
      name: '',
      email: '',
      phone: ''
    })
  };
  render() {
    const {email,  name, phone} = this.state;
    return(
      <Consumer>
        {value => {
          const {dispatch} = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmit.bind(this, dispatch)}>
                  <TextInputGroup label="Name" onChange={this.onChange} value={name} placeholder="Enter name" name="name"/>
                </form>
              </div>
              <div className="card-body">
                <form>
                  <TextInputGroup label="Email" onChange={this.onChange} value={email} placeholder="Enter email" name="email" type="email"/>
                </form>
              </div>
              <div className="card-body">
                <form>
                  <TextInputGroup label="Phone" onChange={this.onChange} value={phone} placeholder="Enter phone" name="phone" type="text"/>
                </form>
                <input type="submit" value="Add Contact" className="btn btn-light btn-block"/>
              </div>
            </div>
          )
        }}
      </Consumer>
    )
  }
}

export default AddContact;