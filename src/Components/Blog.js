import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Card from './Card'
import FilterBar from './FilterBar'
import './Blog.css'
import { Link, useHistory, useLocation } from 'react-router-dom'
export default function Blog() {
    
    const query = new URLSearchParams(useLocation().search);
    const [visible, setVisible] = useState(12);
    const [card, setCard] = useState([]);
    const [locale, setLocale] = useState("en");
    const history = useHistory();
    const BACKEND_URL = "http://54.220.211.123:1335"
    const endPoint = "http://54.220.211.123:1335/articles?_sort=date:desc" 

    const showMoreItems = () => {
        setVisible(prevValue =>
            prevValue + 6

        );

    }




    useEffect(() => {
        axios.get("http://54.220.211.123:1335/articles?_sort=publishDate:desc&_locale="+ localStorage.getItem("locale")).
            then(async res => {
                await setCard(res.data);
                console.log(res.data)

            })
            .catch(err => console.log(err))
    }, [ card,localStorage.getItem("locale")]);




    // function setLang() {
    //     setLocale(window.locales.value);
    //     history.push("/blog?_locale=" + window.locales.value);
    // }

    return (
        <div className="container" >
            <div className="maxWidth">
        

                <div className="wrapper">
                    <div className="innerWrapper">
                    {/* <select
                                name="locales"
                                id="locales"
                                onChange={setLang}
                                value={locale}
                            >
                                <option  value="en">English</option>
                                <option value="ar">Arabic</option>
                            </select> */}
                        <div className="title">
                           
                            <h1 className="label">
                                <span className="text" >Blog</span>

                            </h1>

                        </div>

                    </div>

                    

                </div>
                <div className="triangle">
                    <div className="triangle-wrapper">
                        <div className="dots">
                            <div className="ratio">
                                <img src="/images/dots.svg" className="Img" />

                            </div>

                        </div>
                        <div className="image">
                            <div className="ratio">
                                <img src="/images/triangle.svg" className="Img" />

                            </div>

                        </div>

                    </div>

                </div>

            </div>
            <div className="articles">
                <div className="maxwidth">
                    <div className="styles-wrapper">
                        <div className="innerWrapper">
                            <FilterBar />
                            <div className="tagResault">
                                <div className="tagsWrapper"></div>
                                <p className="text">Showing {visible <= card.length ? visible : card.length} of {card.length} Blog Posts</p>

                            </div>



                            <div className="cardsGrid">


                                {
                                    card.slice(0, visible).map(item => (

                                        <Card

                                            image={item.image ? item.image : null}
                                             tag={item.categories.length >= 0 ? item.categories :null}
                                            title={item.title}
                                            abstract={item.abstract}
                                            name={item.author}
                                            publishDate={item.publishDate}
                                            slug={item.slug}
                                            translator={item.translator ? item.translator : null}
                                        />
                                    ))

                                }


                            </div>
                            <div className="buttonContainer" >
                                <div className="styles-button">
                                    <span className="shadow"></span>
                                    <div className="background">
                                        <div className="hoverCircle"></div>
                                    </div>
                                    <Link className="buttonLink" onClick={showMoreItems}  >
                                        See more
                                  <svg
                                            className="svgStyle"
                                            viewBox="0 0 11 12"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z"
                                                fill="#74E4A2"
                                            ></path>
                                            <path
                                                d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z"
                                                fill="#74E4A2"
                                            ></path>
                                        </svg>
                                    </Link>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


            </div>
        </div>
    )
}
