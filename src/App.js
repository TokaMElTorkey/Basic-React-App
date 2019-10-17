import React from 'react';
import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import All from './components/All';
import Tabs from './components/Tabs';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact={true} path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/tabs" component={Tabs} />
      <Footer />
    </div>
  );
}

export default App;
