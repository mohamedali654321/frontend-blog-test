import React from 'react'
import styled from 'styled-components'
import './Hero.css'


const BackgroundTop = styled.div`
   z-index: 0;
    position: absolute;
    top: 0;
    right: 0;
    width: 90%;
    max-width: 1024px;


 `
const ImgTop = styled.img`
 position: relative;
    top: 0px;
    left: 0;
    width: 100%;
    height: 100%; 
    
 `
const ImgBottom = styled.img`
position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    bottom:0;

`
const BackgroundBottom = styled.div`
    z-index: 0;
    
    position: absolute;
    bottom: 0;
    left: 0;
    width: 95%;
    max-width: 180px;
`

const Hero = () => (

  <div className="Hero">



    <div className="HeroGroup">
      <BackgroundTop>
         <ImgTop src="/images/hp-logo-hero_c94026101f.svg" /> 
        

      </BackgroundTop>
      <BackgroundBottom>

        <ImgBottom src="/images/hp-square-hero_dabb2415b2.svg" />


      </BackgroundBottom>
      <h1>تقنيه المعارف للتجارة</h1>


      <p>
        مؤسسة تقنية المعارف للتجارة هي مؤسسة سعودية عربية تعمل في مجال تكامل النظم المتخصصة في تقنيات الوصول للمعلومة (Information Access Technologies) ثنائية اللغة للمؤسسات الحكومية والشركات.
         </p>

      <ul className="list">

        <a href="/"><li className="left">Get Start </li></a>
        <a href="/"><li className="right">Try live Demo</li></a>
      </ul>




    </div>
    <div className="hero-img">

      <img className="img1" src="/images/why-strapi-interface_133a162968.svg" />


    </div>


  </div>

)

export default Hero
