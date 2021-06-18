import React from 'react'
import styled from 'styled-components'
const Wrapper=styled.div`
   position: relative;
    height:100%;
    max-width: 1250px;
    margin-left: auto;
    margin-right: auto;
    padding: 300px 0 20px;
    

`

const WrapperGroup=styled.div`
    position: relative;
    display: grid;
    grid-gap:30px;
    grid-template-columns:repeat(5,1fr);
    align-items: center;
    justify-items: center;
   
    
    /* position: relative;
    gap:20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 100%; */
 a{
    max-width: 130px;
    height: 110px;
    transition:.8s  cubic-bezier(0.2, 0.82, 0.2, 1);
 }
 a:hover{

    transform:translateY(-20px);
 }
 img{
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
     
   /* box-shadow: 0 30px 40px rgba(0, 0, 0, 0.5);  */
 }


`


function Logo() {
    return (
        <Wrapper>
         
            <WrapperGroup>
            <a href=""><img src="/images/logo/pig1.png"/></a>
               <a href=""><img src="/images/logo/pig1.png"/></a>
               <a href=""><img src="/images/logo/pig1.png"/></a>
               <a href=""><img src="/images/logo/pig1.png"/></a>
               <a href=""><img src="/images/logo/pig1.png"/></a>
               <a href=""><img src="/images/logo/pig1.png"/></a>
               <a href=""><img src="/images/logo/pig1.png"/></a>
               <a href=""><img src="/images/logo/pig1.png"/></a>
               <a href=""><img src="/images/logo/pig1.png"/></a>
               <a href=""><img src="/images/logo/pig1.png"/></a>

               
            
            </WrapperGroup>
        </Wrapper>
    )
}



export default Logo

