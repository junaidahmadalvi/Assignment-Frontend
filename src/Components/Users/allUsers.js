import React from 'react'
import axios from 'axios';
import  {  useState,useEffect } from 'react'
import Table from 'react-bootstrap/Table';

const AllUsers = () => {
    

    axios
  .get("http://localhost:7000/posts", {
    responseType: "json",
  })
  .then(function (response) {
    console.log(response.data);
  });



  const [data, setPost] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:7000/allUsers`).then(res => {
    console.log(res.data);

      setPost(res.data);
    });
  }, []);


  return (
    <div className="App">
      <Table striped bordered hover>
      <thead>

        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
          <th>Age</th>
          
        </tr>
        </thead>
        <tbody>
              {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.email}</td>
              <td>{val.cell}</td>
              <td>{val.age}</td>
              
            </tr>
          )
        })}
        </tbody>

      </Table>
    </div>
  );
}

export default AllUsers

