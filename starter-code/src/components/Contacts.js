import React from 'react';


class Contacts extends React.Component {
  render() {

    const { name, pictureUrl, popularity } = this.props.data

    return (
      <React.Fragment>
        <tr>
          <td><img width='100px' src={pictureUrl} alt={name} /></td>
          <td><h1>{name}</h1></td>
          <td>{popularity} </td>
        </tr>
      </React.Fragment >
    )
  }
}


export default Contacts;