// Required NPM
import React, {Component, useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
// import Navbar from '../components/navbarOnePage.jsx';
// import Footer from '../components/footer.jsx';
import RouteList from './routes.js';
import Navbar from '../components/navbar/navbar.jsx';



const App = (props) => {
  const [user, setUser] = useState({})
  const [vwm, setVwn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)


  return(
    <div>
      <Navbar/>
      <Routes {...props}>
        {RouteList.map( r => {
          return (
            <Route  {...props} exact={r.exact} path={r.path} key={r.path} element={<r.component/>}>
            </Route>
          )
        })}
      </Routes>
    </div>
  )
}
 
export default App;