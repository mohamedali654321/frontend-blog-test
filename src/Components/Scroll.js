import React, { Component } from 'react';
import './Scroll.css'
class Scroll extends Component {
    constructor(props) {
        super(props)
        this.state = {
          scroll: false
               
        }
        
    
      }

      componentDidMount() {
        window.addEventListener('scroll', function () {
            var scrollTop=this.document.querySelector('.scrollTop');
            scrollTop.classList.toggle("active",window.scrollY > 250)
            
        })

        
      }

    
  render() {
    return (
      
      <div className="scrollContainer">

          <div className="scrollTop" onClick={(e)=>{ window.scrollTo({top:0,behavior:"smooth"})}}>

          </div>
      </div>
      
      
    );
  }
}

export default Scroll;

