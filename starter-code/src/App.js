import React, { Component } from 'react';
import './App.css';
import contacts from './contacts.json'
import Contacts from './components/Contacts'

class App extends Component {
  render() {

    const contactsArray = contacts.slice(0, 5);
    const contactElements = contactsArray.map((el, index) => {
      return <Contacts data={el} key={index}> </Contacts>
    })

    return (
      <div className="App">



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
