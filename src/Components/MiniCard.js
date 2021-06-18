import React from 'react'
import {Link} from 'react-router-dom'
import './MiniCard.css'


function Card(props) {
    return (
        <div className="cardContainer">
            <Link to={`/blog/${props.slug}`} className="cardArrowLink">
                <div className="card-bg">
                    <div className="background"></div>
                </div>
                <div className="card-content">
                    <div href="" className="imageCoverContainer">
                        <div className="image-cover">
                            <div className="ratio">
                                <div className="child">
                                {
                                   props.image && props.image.url !==null ? (
                                    <div className="CoverImg">
                                        <div className="CoverRatio">
                                            <img src={props.image} className="Img" />
                                        </div>


                                    </div>
                                   ):(
                                       <>
                                      
                                       <img src="/images/default.png" className="Img" />
                                       <p className="defaultCat">{props.tag}</p>
                                       <span className="defaultTitle">{props.title}</span>
                                       </>
                                   )

                                  }


                                </div>


                            </div>

                        </div>

                    </div>
                    <div className="Content">
                        <div className="listCardContent">
                            <div className="tags"><span className="Tag"><span>{props.tag}</span></span></div>
                            <h2 >{props.title}</h2>
                            <p>{props.text}</p>
                            <div className="author">
                            <p className="name">{props.name}</p>
                            <p className="date">{props.date}</p>


                            </div>

                        </div>



                    </div>



                </div>

            </Link>

        </div>
    )
}



export default Card

