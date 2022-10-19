import React, { useState,useEffect } from 'react';
import axios from 'axios';

export function Update() {

  const [id, setID] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const updateAPIData = () => {
    axios.put(`https://62dd3993ccdf9f7ec2c27434.mockapi.io/Crud/${id}`, {
      firstName,
      lastName,
    });
  };
  return (

    <div className="create-form">

      <div>
        <label>First Name</label>
        <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name</label>
        <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
      </div>
      <button onClick={updateAPIData} type='submit'>Update</button>

    </div>

  );
}
