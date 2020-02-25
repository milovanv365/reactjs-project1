import React from 'react'
import Grid from '@material-ui/core/Grid';
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
            <Grid container className="footer-content">
                <Grid item xs={12} sm={3} className="language-select text-x1 lg-text-x1 mv-x2">
                    <Flag code="us" />
                    <span className="country-name">United States</span>
                    <ExpandLessIcon />
                </Grid>
                <Grid item xs={12} sm={9}>
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
                </Grid>
            </Grid>
        </footer>
    )
};

export default Footer


