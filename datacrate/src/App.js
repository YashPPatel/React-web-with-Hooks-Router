import React,{useState,useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from './components/pages/Home'
import Products from './components/pages/Products'
import Services from './components/pages/Services'
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import { css } from "@emotion/react";
import './components/Form.css'
import Form from './components/Form'


function App() {
  const [loading,setLoding] = useState(false);

  const over = css`
  text-align:center ;
  background-color: #282c34;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  `;

  useEffect(() => {
      setLoding(true)
      setTimeout(()=>{
        setLoding(false)
      },4500)
  }, [])
  return (
    <div className="App">
    {
      loading ?
      <ClimbingBoxLoader
 css={over} color={"#f37a24"} loading={loading}   size={30} />

      :

      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/services" component={Services} />
          <Route path="/products" component={Products} />
          <Route path="/FormSignup" component={Form}/>
        </Switch>
      </Router>


    }
          </div>
  );
}

export default App;
