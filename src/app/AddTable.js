

import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';

const style = {
  table: {
    borderCollapse: 'collapse'
  },
  tableCell: {
    border: '1px solid gray',
    margin: 0,
    padding: '5px 10px',
    width: 'max-content',
    minWidth: '150px'
  },
  form: {
    container: {
      padding: '20px',
      border: '1px solid #F0F8FF',
      borderRadius: '15px',
      width: 'max-content',
      marginBottom: '40px'
    },
    inputs: {
      marginBottom: '5px'
    },
    submitBtn: {
      marginTop: '10px',
      padding: '10px 15px',
      border: 'none',
      backgroundColor: 'lightseagreen',
      fontSize: '14px',
      borderRadius: '5px'
    }
  }
}

function PhoneBookForm({ addEntryToPhoneBook }) {

  const [name, setName] = useState("Coder");
  const [lastName, setLastName] = useState("Byte");
  const [phoneNum, setPhoneNum] = useState("8885559999");

  const submitValue = (e) => {
    if (e) e.preventDefault();
    if(name&& lastName&&phoneNum){ 
    addEntryToPhoneBook(name, lastName, phoneNum);
    setName("Coder");
    setLastName("Byte");
    setPhoneNum("8885559999");
    }

  }
  return (
    <form onSubmit={e => submitValue(e)} style={style.form.container}>
      <label>First name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userFirstname'
        name='userFirstname'
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <label>Last name:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userLastname'
        name='userLastname'
        type='text'
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <label>Phone:</label>
      <br />
      <input
        style={style.form.inputs}
        className='userPhone'
        name='userPhone'
        type='text'
        value={phoneNum}
             onChange={(e) => setPhoneNum(e.target.value)}
      />
      <br />
      <input
        style={style.form.submitBtn}
        className='submitButton'
        type='submit'
        value='Add User'
      />
    </form>
  )
}

function InformationTable({addDetails}) {

  const value=addDetails.sort((a,b) => (a.lastName > b.lastName) ? 1 : ((b.lastName > a.lastName) ? -1 : 0));
  return (
    <table style={style.table} className='informationTable'>
      <thead>
        <tr>
          <th style={style.tableCell}>First name</th>
          <th style={style.tableCell}>Last name</th>
          <th style={style.tableCell}>Phone</th>
        </tr>


      </thead>
      <tbody>
        {value?.map((data,index)=>{
          return(
            <tr key={index}>
            <td style={style.tableCell}>{data.name}</td>
            <td style={style.tableCell}>{data.lastName}</td>
            <td style={style.tableCell}>{data.phoneNum}</td>
          </tr>
          )
        })}
       </tbody>
    </table>
  );
}

function Application(props) {
  const [addDetails, setDetails] = useState([]);

  const addEntryToPhoneBook = (name, lastName, phoneNum) => {
    
    setDetails((prevState) => [
     ...prevState, {name:name, lastName:lastName, phoneNum:phoneNum}
  ])
  
  }
  return (
    <section>
      <PhoneBookForm  addEntryToPhoneBook={addEntryToPhoneBook}/>
      <InformationTable addDetails={addDetails}/>
    </section>
  );
}

export default Application;