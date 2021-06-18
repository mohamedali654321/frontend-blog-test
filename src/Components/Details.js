import React, { useState, useEffect } from 'react'
import './Details.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import NewsLetterBanner from './NewsLetterBanner';
import MiniCard from './MiniCard';
import ReactPlayer from 'react-player'
import videoExtensions from 'video-extensions'
import { DiscussionEmbed } from 'disqus-react';

function Details({ match }) {
    const slug = match.params.slug;
    const [details, setDetails] = useState([]);
    const [id, setId] = useState("");
    // const [title,setTitle]=useState()
    const [currentId, setCurrentId] = useState("")
    const [currentLocale, setCurrentLocale] = useState("")
    const [convertLocale, setConvertLocale] = useState("")
    const [cardData, setCardData] = useState([]);
    const [localeData, setLocaleData] = useState([]);
    const [locales, setLocales] = useState([])
    const [title, setTitle] = useState('');
    const [testData, setTestData] = useState([])
    const BACKEND_URL = "http://54.220.211.123:1335";
    const url = window.location.href; 
    console.log({url})
    const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
    const twitterUrl = `https://twitter.com/intent/tweet?url=${url}`;
    const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${url}`;




    useEffect(() => {
        axios.get(`http://54.220.211.123:1335/articles?slug=${slug}&_locale=${localStorage.getItem("locale")}`)
            .then(async res => {

                await setDetails(res.data);
                details.map(details => {
                    setCurrentId(details.id)
                    setCurrentLocale(details.locale);
                    setLocales(details.localizations)
                    details.localizations.map(item => {
                        setId(item.id ? item.id : null);
                        setConvertLocale(item.locale ? item.locale : null);


                    })
                })



                // setLocales(res.data[0].localizations);
                // setConvertLocale(locales[0].locale)
                // setId(locales[0].id)

                // if(res.data[0].localizations.length > 0){
                //     await setLocales(res.data[0].localizations[0] !== null ? res.data[0].localizations[0] : null);
                //     await setId(res.data[0].localizations[0].id !== null ? res.data[0].localizations[0].id : null );
                //     await setConvertLocale(res.data[0].localizations[0].locale  !== null ? res.data[0].localizations[0].locale : null)

                // }




            })
            .catch(err => console.log(err));






    }, [details]);






    useEffect(() => {

        if (localStorage.getItem("locale") != currentLocale && locales.length > 0) {
            axios.get(`http://54.220.211.123:1335/articles?id=${id}&_locale=${convertLocale}`)
                .then(async res => {


                    await setLocaleData(res.data);



                })
                .catch(err => console.log(err))


        }


        if (localStorage.getItem("locale") == currentLocale && locales.length > 0) {


            axios.get(`http://54.220.211.123:1335/articles?slug=${slug}&_locale=${localStorage.getItem("locale")}`)
                .then(async res => {

                    await setLocaleData(res.data);



                })
                .catch(err => console.log(err));
        }

        if (locales.length == 0) {

            axios.get(`http://54.220.211.123:1335/articles?id=${currentId}&_locale=${currentLocale}`)
                .then(async res => {

                    await setLocaleData(res.data);


                })
                .catch(err => console.log(err));




        }





    }, [localeData])




    let keywords = [];

    details.map(details => {
        if (details.keywords.length > 0) {
            details.keywords.map(item => {

                keywords.push(item.word.toLocaleLowerCase())
            });

        }


    })




    useEffect(() => {
        axios.get("http://54.220.211.123:1335/articles?_sort=publishDate:desc&_locale=" + localStorage.getItem("locale"))
            .then(async res => {

                await setCardData(res.data);

            })
            .catch(err => console.log(err))
    }, []);



    let intersted = cardData.filter(card => {
        if (keywords.length > 0) {
            for (let i = 0; i < keywords.length; i++) {

                return card.title.toLocaleLowerCase().includes(keywords[i]);
            }

        }
        else {
            return card.title.toLocaleLowerCase().includes("strapi");
        }


    });

    for (let i = 0; i < intersted.length; i++) {
        if (title === intersted[i].title) {
            intersted.splice(i, 1);
        }

    }



    return (
        <div className="Container" >
            <div className="HomeLinkWrapper">
                <Link to="/blog" className="home-link"><span className="HomeLinkContainer">
                    <span className="label">Back to articles</span>
                    <svg className="SmallArrow" viewBox="0 0 11 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 9.4l3.2-3.8L5 1.8a1 1 0 01-.2-.7c0-.3 0-.6.2-.7.4-.4.9-.4 1.2 0L10 4.9c.3.4.3 1 0 1.4L6 10.8c-.3.4-.8.4-1.2 0-.3-.4-.3-1 0-1.4z" fill="#8c4bff">
                        </path><path d="M1 4.7a.9.9 0 100 1.8V4.7zm7.4 0H1v1.8h7.4V4.7z" fill="#8c4bff"></path></svg>
                </span></Link>
            </div>


            <section className="styles-gradient-right">
                {
                    localeData.map(details => (


                        <div className="style-wrapper">
                            <div className="Wrapper-bg">


                                <div className="innerWrapper">

                                    <h1 className="Title">{details.title}</h1>

                                    <div className="Ratio">
                                        <div className="children">
                                            {
                                                details.coverMedia === null && details.image && details.image.url !== null && videoExtensions.includes(details.image.ext.substring(1)) === true && (

                                                    <div className="style-ratios">
                                                        <ReactPlayer
                                                            width='100%'
                                                            height='100%'
                                                            controls
                                                            url={`http://54.220.211.123:1335${details.image.url}`}
                                                            className="Imgs" />
                                                    </div>

                                                )

                                            }

                                            {
                                                details.coverMedia === null && details.image && videoExtensions.includes(details.image.ext.substring(1)) === false && (
                                                    <div className="style-ratios">
                                                        <img src={BACKEND_URL + details.image.url} className="Imgs" />
                                                    </div>

                                                )

                                            }

                                            {
                                                details.coverMedia !== null && details.coverMedia.url !== null && videoExtensions.includes(details.coverMedia.ext.substring(1)) === false && (
                                                    <div className="style-ratios">
                                                        <img src={BACKEND_URL + details.coverMedia.url} className="Imgs" />
                                                    </div>
                                                )


                                            }

                                            {
                                                details.coverMedia && details.coverMedia.url !== null && videoExtensions.includes(details.coverMedia.ext.substring(1)) === true && (

                                                    <div className="style-ratios">
                                                        <ReactPlayer
                                                            width='100%'
                                                            height='100%'
                                                            controls
                                                            url={`http://54.220.211.123:1335${details.coverMedia.url}`}
                                                            className="Imgs" />
                                                    </div>

                                                )

                                            }

                                            {
                                                !details.image && !details.coverMedia && (

                                                    <div className="style-ratios">

                                                        <img src="/images/default.png" className="Imgs" />
                                                        <ul className="styles_tags">

                                                            {
                                                                details.categories && details.categories.length > 0 && (
                                                                    details.categories.map(tag => (

                                                                        <li className="style_tag"><p className="defaultCat">{tag.name}</p></li>
                                                                    ))
                                                                )
                                                            }
                                                        </ul>

                                                        <span className="defaultTitle">{details.title}</span>
                                                    </div>

                                                )

                                            }






                                        </div>

                                    </div>



                                </div>





                            </div>
                            <div className="ContentWrapper">
                                <div className="ContentContainer">
                                    <div className="ShareContainer">
                                        <ul className="share">
                                            <li className="socialMedia">

                                                <a href={facebookUrl} target="_blank" rel="noopener" alt className="Button" style={{ color: "#4e6294" }}>

                                                    <div className="Icon">
                                                        <i className="fab fa-facebook-f"></i>
                                                    </div>

                                                </a>

                                            </li>

                                            <li className="socialMedia">
                                                <a href={twitterUrl} target="_blank" className="Button" style={{ color: "#4e6294" }}>
                                                    <div className="Icon">
                                                        <i className="fab fa-twitter" ></i>
                                                    </div>

                                                </a>
                                            </li>

                                            <li className="socialMedia">
                                                <a href={linkedinUrl} target="_blank" className="Button" style={{ color: "#4e6294" }}>
                                                    <div className="Icon">
                                                        <i className="fab fa-linkedin"></i>
                                                    </div>

                                                </a>
                                            </li>

                                            <li className="socialMedia">
                                                <a href={`https://api.whatsapp.com/send?text=${[details.title]} ${[url]}`} target="_blank" className="Button" style={{ color: "#4e6294" }}>

                                                    <div className="Icon">
                                                        <i className="fab fa-whatsapp"></i>
                                                    </div>

                                                </a>
                                            </li>

                                            {/* <li className="socialMedia">
                                                <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                                    <div className="Icon">
                                                        <i className="fab fa-youtube"></i>
                                                    </div>

                                                </Link>
                                            </li> */}
                                            <li className="socialMedia">
                                                <a href={`mailto:?subject=${details.title}&body=${details.abstract}`} target="_blank" className="Button" style={{ color: "#4e6294" }}>

                                                    <div className="Icon">
                                                        <i className="far fa-envelope"></i>
                                                    </div>

                                                </a>
                                            </li>

                                            <li className="socialMedia">
                                                <Link to="/" className="Button" style={{ color: "#4e6294" }}>
                                                    <div className="Icon">
                                                        <i className="fab fa-tiktok"></i>
                                                    </div>

                                                </Link>
                                            </li>


                                        </ul>

                                    </div>
                                    <div className="InnerContentContainer">
                                        <div className="Content">
                                            <div className="Author">
                                                <div className="style-image">
                                                    <div className="ratio">
                                                        <img src="/images/51f6fb256629fc755b8870c801092942.png" className="avatar" />
                                                    </div>
                                                </div>
                                                <div >

                                                    <p className="auth"> Author: {details.author}</p>
                                                    <p className="translate">Translated by: {details.translator}</p>
                                                    <p className="date">Published Date: {details.date}</p>
                                                </div>

                                            </div>
                                            <div className="separator"></div>

                                            <div className="details">
                                                <blockquote dangerouslySetInnerHTML={{ __html: details.abstract }}>

                                                </blockquote>
                                                <div className="ContentDetails" dangerouslySetInnerHTML={{ __html: details.body }} />
                                                <div className="separator3"></div>
                                                {/* <span className="bar">
                                            <span className="jquery"></span>
                                        </span> */}
                                                {
                                                    details.category ? (
                                                        <div className="CateLabel">Category:  <span>{details.category.name}</span></div>
                                                    ) : null
                                                }

                                                {
                                                    details.channel ? (
                                                        <div className="CateLabel">Channel:  <span>{details.channel.name}</span></div>
                                                    ) : null
                                                }
                                                {
                                                    details.issue ? (
                                                        <div className="CateLabel">Issue:  <span>{details.issue.name}</span></div>
                                                    ) : null
                                                }


                                            </div>
                                        </div>

                                    </div>
                                    {
                                        details.sources && details.sources.length > 0 ? (
                                            <div className="SourceInnerContentContainer" >
                                                <div className="SourceContent">
                                                    <div className="sourceLabel">Sources: </div>
                                                    <div className="separator2"></div>
                                                    {details.sources.map(source => (
                                                        <div className="">
                                                            <a href={source.url} className="sourceLinks">{source.name}</a>
                                                        </div>


                                                    ))
                                                    }
                                                </div>

                                            </div>) : null
                                    }

                                </div>
                                <div className="comments">
                                    <DiscussionEmbed
                                        shortname="KwareTech-Comments"
                                        config={{
                                            url: "http://54.220.211.123:9000",
                                            identifier: details.id,
                                            title: details.title,
                                            language: localStorage.getItem("locale")
                                        }}
                                    />
                                </div>
                            </div>




                        </div>

                    ))
                }



            </section>
            <div className="RelatedArticlesGrid">
                <div className="MaxWidth">
                    <section className="ArticleGradient">
                        <div className="TitleWrapper">
                            <div className="InnerTitleWrapper">
                                <div className="headerWrapper">
                                    <h1 className="typographyTitle">
                                        <span className="TitleLabel">You might be interested in</span>
                                    </h1>
                                </div>
                            </div>

                        </div>

                    </section>

                    <div className="RelatedArticlesWrapper">
                        <div className="InnerCardGrid">
                            <div className="CardGrid">
                                {intersted && intersted.length > 0 && (

                                    intersted.slice(0, 3).map(article => (

                                        <MiniCard
                                            image={article.image ? BACKEND_URL + article.image.url : null}
                                            title={article.title}
                                            text={article.abstract}
                                            name={article.author}
                                            date={article.publishDate}
                                            slug={article.slug}
                                        />
                                    ))
                                )

                                }

                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <NewsLetterBanner />

        </div>
    )
}

export default Details
