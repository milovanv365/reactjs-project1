import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"
import Button from '@material-ui/core/Button';

import CustomButton from "../components/CustomButton";

import productOne from "../assests/images/product1.png";
import productTwo from "../assests/images/product2.png";
import contentImgTwo from "../assests/images/bg-home2.jpg";
import contentImgThree from "../assests/images/bg-home3.jpg";

const Home = () => {
    return (
        <div className="main">
            <div className="content-slot-top">
                <p className="text-x7 lg-display-none text-medium text-align-center">A Better Way to Listen</p>
                <p className="lg-text-x7 display-none text-medium text-align-center">A Better Way to Listen</p>
                <div className="lg-mt-x0p5 mt-x1">
                    <Button className="color-white lg-text-x1 text-regular border-radius-pill tf-none mr-x1 lg-ph-x0p5 lg-pv-x0p25 ph-x2 pv-x0p5 lg-mr-x0p5">Watch the Video</Button>
                    <Link to="/learn-more" className="text-x1-a lg-text-x1 bb-x1">Learn more</Link>
                </div>
            </div>
            <div className="product-slot">
                <Grid container>
                    <Grid container alignItems="flex-start" xs={12} sm={6} className="product-box1 item">
                        <Grid item xs={6}>
                            <Link to="">
                                <img src={productOne} alt="smart watch"/>
                            </Link>
                        </Grid>
                        <Grid item xs={6} className="ph-x1 pv-x1 lg-ph-x0p25 lg-pv-x0p25">
                            <Link >
                                <p className="text-x4 lg-text-3 text-medium lg-mb-x1 mb-x1 lg-mb-x1">Smart watches for every fitness level</p>
                                <p className="flex-align-center text-x2 lg-text-x2 text-medium">Shop now <ArrowRightAltIcon /></p>
                            </Link >
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" xs={12} sm={6} className="product-box2 item">
                        <Grid item xs={6}>
                            <Link ><img src={productTwo} alt="smart watch"/></Link>
                        </Grid>
                        <Grid item xs={6} className="ph-x1 pv-x1 lg-ph-x0p25 lg-pv-x0p25">
                            <Link>
                                <p className="text-x4 lg-text-3 text-medium lg-mb-x1 mb-x1 lg-mb-x1">Trackers for a healthy lifestyle</p>
                                <p className="flex-align-center text-x2 lg-text-x2 text-medium">Shop now <ArrowRightAltIcon /></p>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" xs={12} sm={6} className="product-box1 item">
                        <Grid item xs={6}>
                            <Link to="">
                                <img src={productOne} alt="smart watch"/>
                            </Link>
                        </Grid>
                        <Grid item xs={6} className="ph-x1 pv-x1 lg-ph-x0p25 lg-pv-x0p25">
                            <Link >
                                <p className="text-x4 lg-text-3 text-medium lg-mb-x1 mb-x1 lg-mb-x1">Smart watches for every fitness level</p>
                                <p className="flex-align-center text-x2 lg-text-x2 text-medium">Shop now <ArrowRightAltIcon /></p>
                            </Link >
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" xs={12} sm={6} className="product-box2 item">
                        <Grid item xs={6}>
                            <Link ><img src={productTwo} alt="smart watch"/></Link>
                        </Grid>
                        <Grid item xs={6} className="ph-x1 pv-x1 lg-ph-x0p25 lg-pv-x0p25">
                            <Link>
                                <p className="text-x4 lg-text-3 text-medium lg-mb-x1 mb-x1 lg-mb-x1">Trackers for a healthy lifestyle</p>
                                <p className="flex-align-center text-x2 lg-text-x2 text-medium">Shop now <ArrowRightAltIcon /></p>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className="content-slot-mid">
                <img src={contentImgTwo} alt="" />
                <Grid container className="text-slot pa-x2 lg-pa-x1p5">
                    <Grid item xs={12} sm={6} className="mb-x1 lg-mb-x0p5 text-x5 lg-text-x5 text-medium">
                        Great sound in the great outdoors
                    </Grid>
                    <Grid item xs={12} sm={5} className="lg-mt-x0p25 text-x2 lg-text-x2 text-regular">
                        <div className="mb-x1 lg-mb-x0p5">Get brilliant sound anywhere with the weatherproof and drop-resistant Move. Control with your voice, the Sonos app, and Apple AirPlay 2 at home, and stream via Bluetooth when WiFi isn't available.</div>
                        <Link class="bb-x1">Shop Move</Link>
                    </Grid>
                </Grid>
            </div>
            <Grid container className="content-slot-bottom">
                <Grid item xs={12} className="text-x5 lg-text-x4 text-medium heading">Why Choose Sonos</Grid>
                <Grid item xs={12} sm={6}>
                    <img src={contentImgThree} alt="" />
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
                <Grid item xs={12} sm={4}>
                    <div className="pv-x2 lg-pv-x0p75 bb-x1">
                        <div className="mb-x0p5 text-x4 lg-text-x2p5 text-medium">
                            <Link className="bb-x1">Brilliant Sound</Link>
                        </div>
                        <p className="text-x2 lg-text-x1p5 text-regular">Enjoy clear, richly detailed sound that fills the room at any volume.</p>
                    </div>
                    <div className="pv-x2 lg-pv-x0p75 bb-x1">
                        <div className="mb-x0p5 text-x4 lg-text-x2p5 text-medium">
                            <Link className="bb-x1">Easy to Use</Link>
                        </div>
                        <p className="text-x2 lg-text-x1p5 text-regular">Setup takes minutes, and control is simple with the Sonos app, Apple AirPlay 2, and your voice.</p>
                    </div>
                    <div className="pv-x2 lg-pv-x0p75 bb-x1">
                        <div className="mb-x0p5 text-x4 lg-text-x2p5 text-medium">
                            <Link className="bb-x1">Listen Your Way</Link>
                        </div>
                        <p className="text-x2 lg-text-x1p5 text-regular">Customize your system and play what you want, where you want.</p>
                    </div>
                    <div className="text-x2 lg-mt-x1p5 display-none">
                        <Link to="/learn-more" className="bb-x1">Learn more</Link>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
};

export default Home