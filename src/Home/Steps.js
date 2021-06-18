import React from 'react'
import './Steps.css'

function Steps() {
    return (
        <div className="steps-wrapper">
         <div className="inner">


         <div className="TextGroup">
                        <div className="label">
                            <span>
                            STEP-BY-STEP GUIDE
                               </span>
                        </div>

                        <h2 className="text">

                            <h3 >How does it work?</h3>

                        </h2>

                        <div className="desc">
                            <span>
                            
                     Make a flexible data structure in 2 minutes.
                     Use our powerful features to customize your API.

                      </span>

                        </div>

                    </div>










         </div>
            <div className="icon">




            <svg
  fill="none"
  viewBox="0 0 300 300"
  className="styles_svg__uLEPr"
  style={{transform: "rotate(0deg)"}}
>
  <g clip-path="url(#variant-1_svg__clip0)">
    <path
    className="variant-1_svg__tetris-dark-path"
      fill="#7A4FF3"
      d="M100 200H0v100h100V200zm100-100H100v100h100V100zM300 0H200v100h100V0z"
    ></path>
    <g filter="url(#variant-1_svg__filter0_d)">
      <path
      className="variant-1_svg__tetris-light-path"
        fill="#956FFF"
        d="M200 0H100v100h100V0z"
      ></path>
    </g>
  </g>
  <defs>
    <clipPath id="variant-1_svg__clip0">
      <path fill="#fff" d="M0 0h300v300H0z"></path>
    </clipPath>
    <filter
      id="variant-1_svg__filter0_d"
      width="140"
      height="140"
      x="84"
      y="-12"
      color-interpolation-filters="sRGB"
      filterUnits="userSpaceOnUse"
    >
      <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
      <feColorMatrix
        in="SourceAlpha"
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
      ></feColorMatrix>
      <feOffset dx="4" dy="8"></feOffset>
      <feGaussianBlur stdDeviation="10"></feGaussianBlur>
      <feColorMatrix
        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0"
      ></feColorMatrix>
      <feBlend in2="BackgroundImageFix" result="effect1_dropShadow"></feBlend>
      <feBlend
        in="SourceGraphic"
        in2="effect1_dropShadow"
        result="shape"
      ></feBlend>
    </filter>
  </defs>
</svg>



            </div>
            
        </div>
    )
}

export default Steps
