import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import IronContacts from './components/IronContacts'

class App extends Component {

  state = {
    contactsArray: contacts.slice(0, 5)
  }

  randomContact = () => {
    const randomIndex = Math.floor(Math.random(contacts.length) * 100)
    this.state.contactsArray.push(contacts[randomIndex])
    let newContactsArray = this.state.contactsArray

    console.log(newContactsArray, contacts[randomIndex], this.state.contactsArray)

    this.setState({
      contactsArray: newContactsArray
    })
  }
  render() {

    const contactElements = this.state.contactsArray.map((el, index) => {
      return <IronContacts data={el} key={index}> </IronContacts>
    })

    return (
      <div className="App">

        <button onClick={() => this.randomContact()}> Add Random Contact</button>
        <table>
          <tr>
            <th colSpan='3'> <h1>Iron Contacts</h1></th>
          </tr>
          <tr>
            <th>
              Picture
                </th>
            <th >
              Name
              </th>
            <th>
              Popularity
              </th>
          </tr>
          {contactElements}
        </table>

      </div>
    );
  }
}

export default App;
