import React from 'react'
import './Review.css'

function Review() {
    return (
        <div className="sliceWrapperReview">
            <div className="maxWidthReview">
                <section className="gradient-centerReview">
                    <div className="styles-wrapperReview">
                        <div className="innerWrapperReview">
                            <div className="title-textReview">
                                <div className="titleReview">
                                    <span>Reviews</span>
                                </div>
                                <h2 className="textReview"><span>Here’s what people have to say about us.</span></h2>

                            </div>

                        </div>
                        <div className="tetrisReview">
                            <svg
                                fill="none"
                                viewBox="0 0 300 300"
                                className="styles_svg__uLEPr"
                                style={{ transform: "rotate(0deg)" }}
                            >
                                <path
                                    className="variant-0_svg__tetris-dark-path"
                                    fill="#7A4FF3"
                                    d="M300 200H200V100h100v100zM200 100H100V0h100v100z"
                                ></path>
                                <path
                                    className="variant-0_svg__tetris-light-path"
                                    fill="#956FFF"
                                    d="M100 300H0V200h100v100z"
                                ></path>
                                <g filter="url(#variant-0_svg__filter0_d)">
                                    <path
                                        className="variant-0_svg__tetris-light-path"
                                        fill="#956FFF"
                                        d="M200 200H100V100h100v100z"
                                    ></path>
                                </g>
                                <defs>
                                    <filter
                                        id="variant-0_svg__filter0_d"
                                        width="140"
                                        height="140"
                                        x="84"
                                        y="88"
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
                                        <feBlend
                                            in2="BackgroundImageFix"
                                            result="effect1_dropShadow"
                                        ></feBlend>
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

                </section>

              

            </div>
           
        </div>
    )
}

export default Review
