import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Createteacher() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const navigate = useNavigate();
  const postData = () => {
    axios.post(`https://62dd3993ccdf9f7ec2c27434.mockapi.io/Crud`, {
      firstName,
      lastName,
    });
  };
  return (

    <div className="create-form">
      <div>Create Teacher</div>
      <div>
        <label>First Name</label>
        <input placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
      </div>
      <div>
        <label>Last Name</label>
        <input placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
      </div>
      <button onClick={postData} type='submit'>Submit</button>

    </div>


  );
}
