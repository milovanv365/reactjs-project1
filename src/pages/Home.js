import React, {useEffect} from "react";
import Grid from '@material-ui/core/Grid';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';

import contentImgTwo from "../assets/images/bg-home2.jpg";
import contentImgThree from "../assets/images/bg-home3.jpg";
import ProductItem from "../components/ProductItem";

const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <div className="main pa-x1">
            <div className="content-slot-top flex-vCenter">
                <div className="mb-x0p5">
                    <p className="text-x7 lg-display-none text-medium text-align-center">A Better Way to Listen</p>
                    <p className="lg-text-x7 xs-display-none text-medium text-align-center">A Better Way to Listen</p>
                </div>
                <div className="lg-mt-x0 mt-x0p5">
                    <Button className="color-white lg-text-x1 text-regular border-radius-pill tf-none mr-x1 lg-ph-x0p5 lg-pv-x0p25 ph-x2 pv-x0p5 lg-mr-x0p5">Watch the Video</Button>
                    <Link to="/learn-more" className="text-x1-a lg-text-x1 bb-x1">Learn more</Link>
                </div>
            </div>
            <div className="product-slot">
                <Grid container>
                    <Grid item xs={12} sm={6}>
                        <ProductItem
                            title = "Smart watches for every fitness level"
                            clsName = "product-box1 item"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProductItem
                            title="Trackers for a healthy lifestyle"
                            clsName = "product-box2 item"
                        />
                    </Grid>
                </Grid>
                <Grid container className="second-row">
                    <Grid item xs={12} sm={6}>
                        <ProductItem
                            title = "Smart watches for every fitness level"
                            clsName = "product-box1 item"
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ProductItem
                            title="Trackers for a healthy lifestyle"
                            clsName = "product-box2 item"
                        />
                    </Grid>
                </Grid>
            </div>
            <div className="content-slot-mid">
                <img src={contentImgTwo} className="width-full" alt="" />
                <Grid container className="text-slot pa-x2 lg-pa-x1p5">
                    <Grid item xs={12} sm={6} className="mb-x1 lg-mb-x0p5 text-x5 lg-text-x5 text-medium">
                        Great sound in the great outdoors
                    </Grid>
                    <Grid item xs={12} sm={5} className="lg-mt-x0p25 text-x2 lg-text-x2 text-regular">
                        <div className="mb-x1 lg-mb-x0p5">Get brilliant sound anywhere with the weatherproof and drop-resistant Move. Control with your voice, the Sonos app, and Apple AirPlay 2 at home, and stream via Bluetooth when WiFi isn't available.</div>
                        <Link className="bb-x1" to="">Shop Move</Link>
                    </Grid>
                </Grid>
            </div>
            <Grid container className="content-slot-bottom">
                <Grid item xs={12} className="text-x5 lg-text-x4 text-medium heading">Why Choose Sonos</Grid>
                <Grid item xs={12} sm={6}>
                    <img src={contentImgThree} className="width-full" alt="" />
                </Grid>
                <Grid item xs={12} sm={2}></Grid>
                <Grid item xs={12} sm={4}>
                    <div className="pv-x2 lg-pv-x0p75 bb-x1">
                        <div className="mb-x0p5 lg-mb-x0p5 text-x4 lg-text-x2p5 text-medium">
                            <Link className="bb-x1" to="">Brilliant Sound</Link>
                        </div>
                        <p className="text-x2 lg-text-x1p5 text-regular">Enjoy clear, richly detailed sound that fills the room at any volume.</p>
                    </div>
                    <div className="pv-x2 lg-pv-x0p75 bb-x1">
                        <div className="mb-x0p5 lg-mb-x0p5 text-x4 lg-text-x2p5 text-medium">
                            <Link className="bb-x1" to="">Easy to Use</Link>
                        </div>
                        <p className="text-x2 lg-text-x1p5 text-regular">Setup takes minutes, and control is simple with the Sonos app, Apple AirPlay 2, and your voice.</p>
                    </div>
                    <div className="pv-x2 lg-pv-x0p75 bb-x1">
                        <div className="mb-x0p5 lg-mb-x0p5 text-x4 lg-text-x2p5 text-medium">
                            <Link className="bb-x1" to="">Listen Your Way</Link>
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