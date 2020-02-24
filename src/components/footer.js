import React from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import YoutubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Flag from 'react-world-flags'


const Footer = () => {
    return (
        <footer>
            <div className="language-options"></div>
            <div className="footer-content">
                <div className="language-select">
                    <Flag code="us" />
                    <span className="country-name">United States</span>
                    <ExpandLessIcon />
                </div>
                <ul className="social-icons">
                    <li>
                        <a href="https://twitter.com/sonos" target="_blank"><TwitterIcon /></a>
                    </li>
                    <li>
                        <a href="http://www.facebook.com/sonos" target="_blank"><FacebookIcon /></a>
                    </li>
                    <li>
                        <a href="http://youtube.com/sonos" target="_blank"><YoutubeIcon /></a>
                    </li>
                    <li>
                        <a href="http://instagram.com/sonos" target="_blank"><InstagramIcon /></a>
                    </li>
                </ul>
            </div>
        </footer>
    )
};

export default Footer


