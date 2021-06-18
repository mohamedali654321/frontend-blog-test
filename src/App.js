import React  from 'react'
import './App.css';
import {BrowserRouter as Router , Route, Switch } from 'react-router-dom'
import Header from './Components/Header';
import Footer from './Components/Footer'
import MainPage from './Components/MainPage';
import Details from './Components/Details';
import OurPartners from './Components/OurPartners'
import OurClints from './Components/OurClints'
import SysSolutions from './Components/SysSolutions'
import Services from './Components/Services'
import Products from './Components/Products'
import HomePage from './Home/HomePage'
import Scroll from './Components/Scroll'






function App() {

  
  return (
    <div className="App">
    <Router>
    <Header/>
    <Scroll/>
      <Switch>
        <Route path="/" exact component={HomePage} /> 
        <Route path="/blog" exact  component={MainPage} />
        <Route path="/:locale/blog/:slug" exact component={Details}/>
        <Route path="/our-partners" exact component={OurPartners} />
        <Route path="/our-clients" exact component={OurClints} />
        <Route path="/sys-solutions" exact component={SysSolutions} />
        <Route path="/services" exact component={Services}  />
        <Route path="/products" exact component={Products} />
      </Switch>

    

      <Footer/>
      
      </Router>

      

     
        
      
    </div>
  );
}

export default App;
