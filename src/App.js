import './App.css';
import React, { Component } from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
    <div className="wrapper">
      <Header/>
        <Switch>
          <Route path='/' component={Home} exact/>
          <Route path='/movieDetail/:id' component={MovieDetail}/>
          <Route path='/about' component={About}/>
          <Route path='/home' component={Home}/>
          <Route component={PageNotFound}/>
        </Switch>
      <Footer/>
    </div>
    
    </BrowserRouter>
  );
}

export default App;
