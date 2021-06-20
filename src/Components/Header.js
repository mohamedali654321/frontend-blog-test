import React, { useState, useRef } from 'react'

import MegMenu from './MegaMenu'
import './Header.css'
import { Link } from 'react-router-dom'
import Language from './Language'


class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScroll: false,
      locales: localStorage.getItem("locale")
      
     
    }

   

  }


  
  
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
    // this.setLocale()
  }

  handleScroll = (event) => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 50) {
      this.setState({ hasScroll: true })
    }
    else {
      this.setState({ hasScroll: false })
    }

  }  

 

  
  

  

  render() {


    return (
      <div className={this.state.hasScroll ? 'Header HeaderScrolled' : 'Header'}>
        <div className="HeaderGroup">
          <a href="/"><img style={{width:"120px" ,height:"70px"  }}  src={this.state.hasScroll || document.location.pathname.length === 1 ? '/images/kware_light-removebg.png' : '/images/kware_dark-removebg.png'} className="logo" /></a>

          <div className="panelBackgroundWrapper">
            <div className="panelBackgroundContainer">
              <div className="panelBackground">
                <div className="panelBackgroundGradient">
                </div>
              </div>
            </div>
          </div>

          <ul className="links">
            
             
            
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/" className="cool">Home</a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/products" className="cool">Products </a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/services" className="cool">Services </a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/blog" className="cool">Blog</a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}><a href="/sys-solutions" className="cool">Sys & Solutions </a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}  ><a href="/our-partners" className="cool">Our-Parteners</a></li>
            <li className={document.location.pathname.length === 1 ? 'HomeHeader NavigationLabel ' : 'NavigationLabel'}> <a href="/our-clients" className="cool">Our-Clients</a> </li>


          </ul>

          
            <Language/>
            



        </div>
      </div>
    )

  }

}




export default Header


