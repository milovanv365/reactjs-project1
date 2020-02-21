import React from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt"

import CustomLink from "../components/CustomLink";
import CustomButton from "../components/CustomButton";

import productOne from "../assests/images/product1.png";
import productTwo from "../assests/images/product2.png";
import contentImgTwo from "../assests/images/bg-home2.jpg"
import contentImgThree from "../assests/images/bg-home3.png"

const Home = () => {
    return (
        <div className="main">
            <div className="content-slot-top">
                <p className="text-x1">A Better Way to Listen</p>
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
                    <CustomLink
                        content = "Learn more"
                        pathName = "/learn-more"
                        color = "#ffffff"
                        fontSize = "1.2vw"
                        lineHeight = "1.5"
                        fontWeight = "400"
                        letterSpacing = ".3px"
                        wordSpacing = ".6px"
                    />
                </div>
            </div>
            <div className="product-slot">
                <Grid container>
                    <Grid container alignItems="flex-start" xs={12} sm={6} className="product-box1 item">
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
                        <CustomLink
                            content="Shop Move"
                        />
                    </div>
                </div>
            </div>
            <div className="content-slot-bottom">
                <img src={contentImgThree} alt="" />
            </div>
        </div>
    )
};

export default Home