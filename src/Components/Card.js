import React from 'react'
import { Link } from 'react-router-dom'
import './Card.css'
import videoExtensions from 'video-extensions'
import ReactPlayer from 'react-player'


function Card(props) {
    const BACKEND_URL = "http://54.220.211.123:1335"
    console.log(props)
   const locale =localStorage.getItem("locale")
   

    return (
        <div className="cardContainer">
            <Link to={`/${localStorage.getItem("locale")}/blog/${props.slug}`} className="cardArrowLink">
                <div className="card-bg">
                    <div className="background"></div>
                </div>
                <div className="card-content">
                    <div href="" className="imageCoverContainerH">
                        <div className="image-coverH">
                            <div className="ratioH">
                                <div className="childH">

                                    {

                                        props.image && props.image.url !== null && videoExtensions.includes(props.image.ext.substring(1)) === true && (

                                            <div className="CoverImgH">
                                                <div className="CoverRatioH">
                                                    <ReactPlayer
                                                        width='330px'
                                                        height="200px"
                                                        controls




                                                        url={`http://54.220.211.123:1335${props.image.url}`}
                                                        className="imgH" />

                                                </div>


                                            </div>

                                        )

                                    }

                                    {
                                        props.image && props.image.url !== null && videoExtensions.includes(props.image.ext) === false && (
                                            <div className="CoverImgH">
                                                <div className="CoverRatioH">
                                                    <img src={BACKEND_URL + props.image.url} className="ImgH" />
                                                    {/* <div className="ImgH" dangerouslySetInnerHTML={{ __html: props.image }}></div> */}
                                                </div>


                                            </div>
                                        )

                                    }

                                    {
                                        props.image === null && (
                                            <>
                                                <div className="CoverImgH">
                                                    <div className="CoverRatioH">
                                                        <img src="/images/default.png" className="ImgH" />
                                                        <ul className="defUl" >

                                                            {
                                                                props.tag && (
                                                                    props.tag.map(tag => (

                                                                        <li className="defLi" ><p className="defaultCat">{tag.name}</p></li>
                                                                    ))
                                                                )
                                                            }
                                                        </ul>
                                                        <p className="defaultCat"></p>
                                                        <span className="defaultTitle">{props.title}</span>
                                                    </div>
                                                </div>
                                            </>

                                        )

                                    }



                                </div>



                            </div>

                        </div>

                    </div>
                    <div className="content">
                        <div className="listCardContent">
                            <ul className="styles_tags">

                                {
                                    props.tag && (
                                        props.tag.map(tag => (

                                            <li className="style_tag"><span className="Tag">{tag.name}</span></li>
                                        ))
                                    )
                                }
                            </ul>
                            {/* <div className="tags"><span className="Tag"><span>{props.tag}</span></span></div> */}
                            <h2 >{props.title}</h2>
                            <p >{props.abstract}</p>
                            <div className="author">
                                <p className="name">Author: {props.name}</p>
                                {
                                    props.translator ? (
                                        <p className="translate">Translated by: {props.translator}</p>
                                    ) : null
                                }
                                <p className="date">Publish Date: {props.publishDate}</p>


                            </div>
                            {/* <div className="voting">

                                <div>
                                <button className="like">
                                    <i className="fa fa-thumbs-up"></i>
                                </button>
                                <span className="likeCount">10</span>
                                </div>
                               
                                <div>
                                <button className="dislike" onClick={(e) => { console.log('hello') }}>
                                    <i className="fa fa-thumbs-down"></i>
                                </button>
                                <span className="likeCount">89</span>
                                </div>
                                
                                  <div>
                                  <button className="dislike" >
                                    <i class="fas fa-eye"></i>
                                </button>
                                <span className="likeCount">89</span>
                                  </div>
                               

                                
                            </div> */}

                            {/* <div className="CourseCard">
                                <div className="likeButton">
                                    <img src="/images/like.svg" />
                                </div>

                                <div className="dislikeButton">
                                    <img src="/images/like.svg" />
                                </div>


                            </div> */}

                        </div>



                    </div>



                </div>

            </Link>

        </div>
    )
}



export default Card

