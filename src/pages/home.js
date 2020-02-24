import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"

import CustomButton from "../components/CustomButton";

import productOne from "../assests/images/product1.png";
import productTwo from "../assests/images/product2.png";
import contentImgTwo from "../assests/images/bg-home2.jpg";
import contentImgThree from "../assests/images/bg-home3.jpg";

const Home = () => {
    return (
        <div className="main">
            <div className="content-slot-top">
                <p className="heading-font1">A Better Way to Listen</p>
                <div style={{marginTop: "calc(100vw * 0.5/27)"}}>
                    <CustomButton
                        label = "Watch the Video"
                        color = "#ffffff"
                        marginRight="calc(100vw * 0.5/27)"
                        padding = "calc(100vw * 0.25/27) calc(100vw * 0.5/27)"
                        backgroundColor="transparent"
                        border = "2px solid #ffffff"
                        borderRadius = "9999px"
                        fontSize = "1.2vw"
                        lineHeight = "1.5"
                        fontWeight = "400"
                        letterSpacing = ".3px"
                        wordSpacing = ".6px"
                        textTransform = "none"
                    />
                    <Link to="/learn-more" className="custom-link1">Learn more</Link>
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
                        <Grid item xs={6} >
                            <Link >
                                <p className="product-description">Smart watches for every fitness level</p>
                                <p className="flex-align-center">Shop now <ArrowRightAltIcon /></p>
                            </Link >
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" xs={12} sm={6} className="product-box2 item">
                        <Grid item xs={6}>
                            <Link ><img src={productTwo} alt="smart watch"/></Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link>
                                <p className="product-description">Trackers for a healthy lifestyle</p>
                                <p className="flex-align-center">Shop now <ArrowRightAltIcon /></p>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" xs={12} sm={6} className="product-box2">
                        <Grid item xs={6}>
                            <Link ><img src={productTwo} alt="smart watch"/></Link>
                        </Grid>
                        <Grid item xs={6}>
                            <Link>
                                <p className="product-description">Trackers for a healthy lifestyle</p>
                                <p className="flex-align-center">Shop now <ArrowRightAltIcon /></p>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container alignItems="flex-start" xs={12} sm={6} className="product-box1">
                        <Grid item xs={6}>
                            <Link >
                                <img src={productOne} alt="smart watch"/>
                            </Link>
                        </Grid>
                        <Grid item xs={6} >
                            <Link >
                                <p className="product-description">Smart watches for every fitness level</p>
                                <p className="flex-align-center">Shop now <ArrowRightAltIcon /></p>
                            </Link >
                        </Grid>
                    </Grid>
                </Grid>
            </div>
            <div className="content-slot-mid">
                <img src={contentImgTwo} alt="" />
                <div className="text-slot">
                    <div className="left-block">Great sound in the great outdoors</div>
                    <div className="right-block">
                        <p>Get brilliant sound anywhere with the weatherproof and drop-resistant Move. Control with your voice, the Sonos app, and Apple AirPlay 2 at home, and stream via Bluetooth when WiFi isn't available.</p>
                        <Link class="custom-link2">Shop Move</Link>
                    </div>
                </div>
            </div>
            <div className="content-slot-bottom">
                <Grid container alignItems="flex-start">
                    <Grid item xs={4}>
                        <p className="heading-font2">Why Choose Sonos</p>
                        <div className="item-box">
                            <Link className="custom-link3">Brilliant Sound</Link>
                            <p>Enjoy clear, richly detailed sound that fills the room at any volume.</p>
                            <div className="division"></div>
                        </div>
                        <div className="item-box">
                            <Link className="custom-link3">Easy to Use</Link>
                            <p>Setup takes minutes, and control is simple with the Sonos app, Apple AirPlay 2, and your voice.</p>
                            <div className="division"></div>
                        </div>
                        <div className="item-box">
                            <Link className="custom-link3">Listen Your Way</Link>
                            <p>Customize your system and play what you want, where you want.</p>
                            <div className="division"></div>
                        </div>
                        <div className="learn-more">
                            <Link to="/learn-more" className="custom-link3">Learn more</Link>
                        </div>
                    </Grid>
                    <Grid item xs={2}></Grid>
                    <Grid item xs={6} >
                        <img src={contentImgThree} alt="" />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default Home