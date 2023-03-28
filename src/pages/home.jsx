import React, { useState } from 'react';
import axios from 'axios';

const HomePage = () => {

  const [ fruit, SetFruit ] = useState("pear")

  // useEffect( () => {
  //   axios.get('/api/test').then( response => {
  //     setFruit(response.data)
  //     console.log(response)
  //   }).catch( err =>{
  //     alert(err)
  //   })
  // },[])

  
  return (
    <div id="homepage-h1-wrapper">
      <h1>Homie Page</h1>
      <p>{fruit}</p>
    </div>
  )
}

export default HomePage;