import React from 'react'
import './NewsLetterBanner.css'

function NewsLetterBanner() {
    return (
        <div className="BannerContainer">
            <div className="BannerWrapper">
                <div className="BannerContent">
                    <h3 className="BannerTitle">Newsletter</h3>
                    <p className="BannerText">Sign up for the KwareTech newsletter to keep up with the latest news from the KwareTech community! </p>
                </div>
                <form className="BannerForm">
                <input type="email" placeholder="Email" className="BannerInput" aria-label="Email" name="email" />
                <div className="BannerButtonContainer">
                <div className="BannerBgBtn">
                    <div className="hoverCircle"></div>

                </div>
                <input type="submit"  name="submit" value="Submit" className="BannerBtnLink"  />

                </div>

                </form>



            </div>
        </div>
    )
}

export default NewsLetterBanner
