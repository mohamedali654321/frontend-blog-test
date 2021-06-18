import React from 'react'
import './Footer.css'
function Footer() {

    const menu = [{
        "title": "product",
        "lists": ["Why KwareTech?", "Content Architecture", "Features", "Enterprise Edition", "Partner Program", "Roadmap", "Support", "Support", "Changelog"]
    },
    {
        "title": "resources",
        "lists": ["How to get started", "Meet the community", "Tutorials", "API documentation", "GitHub repository", "Starters", "Strapi vs Wordpress", "The Guide to Headless CMS"]
    },
    {
        "title": "integration",
        "lists": ["All integrations", "React CMS", "Next.js CMS", "Gatsby CMS", "Vue.js CMS", "Nuxt.js CMS", "Gridsome CMS", "Flutter CMS", "Hugo CMS", "Typescript CMS"]
    },
    {
        "title": "company",
        "lists": ["About us", "Blog", "Careers", "Contact", "Newsroom"]
    },

    ];

    return (
        <div className="container">
            <div className="top">
                <div className="background">
                    <div className="img">
                        <img src="https://strapi.io/_next/static/images/05cae2bf306c44b4a82fda253514822e.svg" />
                    </div>
                </div>
                <div className="content">
                    <div className="wrappers">
                        <div className="inner">
                            <h2 className="title">
                                Unleash content.
                    </h2>
                            <div className="action">

                                <div className="left-btn">
                                    <span className="shadow"></span>
                                    <a href="/" className="btnLink" style={{top:"-5px"}}>Starters</a>

                                </div>
                                <div className="left-btn">
                                    <span className="shadow" style={{ backgroundColor: "#8c4bff" }}></span>
                                    <a href="/" className="btnLink" style={{ color: "white" ,top:"-5px" }} >Get Started</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="content">
                    <div className="leftContent">

                        <a href="/"  className="logoLink"><img style={{width:"120px",height:"50px"}} src="/images/light22.png" className="logo" /></a>

                        <p className="text">
                            " KwareTech Corporation for Trading is a Saudi Arab institution working in the field of systems integration 
                            specialized in bilingual Information Access Technologies for government institutions and companies. "
                        </p>
                    </div>
                    <nav className="rightContent">
                        {
                            menu.map(item => (
                                <div className="menu">
                                    <p className="title">{item.title}</p>
                                    <ul>
                                        {item.lists.map(list => (
                                            <a href="/" ><li>{list}</li></a>
                                        ))}
                                    </ul>
                                </div>
                            ))
                        }

                    </nav>
                </div>
                <div className="legals">
                    <ul className="subLinks">
                        <li className="subLink">
                            ©
                            2021
                            , Strapi
                         </li>
                        <a href="" className="link">License</a>
                        <a href="" className="link">Terms</a>
                        <a href="" className="link">Privacy</a>

                    </ul>

                    <div className="socialLinks">
                        <ul style={{ listStyle: "none" }}>

                            <li className="iconLink">
                                <a href="" className="link-style">
                                    <div className="iconWrapper" >
                                        <div className="iconCotent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Github.colored_76e5fa27f5.svg" className="style-img" />
                                        </div>
                                    </div>
                                    <div className="iconHover">
                                        <div className="iconContent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Github.grey_e7381d15e3.svg" className="style-img" />
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="iconLink">
                                <a href="" className="link-style">
                                    <div className="iconWrapper" >

                                        <div className="iconCotent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Slack.grey_2158d485e2.svg" className="style-img" />

                                        </div>
                                    </div>

                                    <div className="iconHover">
                                        <div className="iconContent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Slack.colored_91892a9e87.svg" className="style-img" />

                                        </div>

                                    </div>
                                </a>
                            </li>
                            <li className="iconLink">
                                <a href="" className="link-style">
                                    <div className="iconWrapper" >
                                        <div className="iconCotent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/twitter.grey_(1)_d37ec1697f.svg" className="style-img" />
                                        </div>
                                    </div>
                                    <div className="iconHover">
                                        <div className="iconContent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Twitter.colored_f5bebe2a2e.svg" className="style-img" />
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="iconLink">
                                <a href="" className="link-style">
                                    <div className="iconWrapper" >
                                        <div className="iconCotent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Facebook.grey_4a7e1fda65.svg" className="style-img" />
                                        </div>
                                    </div>
                                    <div className="iconHover">
                                        <div className="iconContent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/Facebook.colored_4d18487e06.svg" className="style-img" />
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="iconLink">
                                <a href="" className="link-style">
                                    <div className="iconWrapper" >
                                        <div className="iconCotent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/LinkedIn.grey_0a6345f7d3.svg" className="style-img" />
                                        </div>
                                    </div>
                                    <div className="iconHover">
                                        <div className="iconContent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/LinkedIn.colored_53e452f06f.svg" className="style-img" />
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li className="iconLink">
                                <a href="" className="link-style">
                                    <div className="iconWrapper" >
                                        <div className="iconCotent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/instagram.grey_c39c37e339.svg" className="style-img" />
                                        </div>
                                    </div>
                                    <div className="iconHover">
                                        <div className="iconContent">
                                            <img src="https://d2zv2ciw0ln4h1.cloudfront.net/uploads/instagram.colored_(1)_3164692cf2.svg" className="style-img" />
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}



export default Footer

