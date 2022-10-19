import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export function Readstudent() {
  const navigate = useNavigate();
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios.get(`https://62dd3993ccdf9f7ec2c27434.mockapi.io/Crud`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);
  const getData = () => {
    axios.get(`https://62dd3993ccdf9f7ec2c27434.mockapi.io/Crud`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };
  const onDelete = (id) => {
    axios.delete(`https://62dd3993ccdf9f7ec2c27434.mockapi.io/Crud/${id}`)
      .then(() => {
        getData();
      });
  };
  return (
    <div>
      <table>
        <thead>
          <div>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Update</th>
            <th>Delete</th>
          </div>
        </thead>
        <tbody>
          {APIData.map((data) => {
            return (
              <div>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <button onClick={() => navigate("/update")} type='submit'>Update</button>
                <button onClick={() => onDelete(data.id)}>Delete</button>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
