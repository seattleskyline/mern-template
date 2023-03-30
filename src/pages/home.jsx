import React, { useState, useEffect } from 'react';
import axios from 'axios';

const HomePage = () => {

  const [ fruit, setFruit ] = useState([]);

  useEffect( () => {
    axios.get('/api/test').then( response => {
      setFruit(response.data[0].lastName)
    }).catch( err =>{
      alert(err)
    })
  },[])

  
  return (
    <div id="homepage-h1-wrapper">
      <h1>Homie Page</h1>
      <p>{fruit}</p>
    </div>
  )
}

export default HomePage;