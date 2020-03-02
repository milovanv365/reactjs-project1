import React from 'react'
import Grid from "@material-ui/core/Grid";
import {Link} from "react-router-dom";
import productOne from "../assets/images/product1.png";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const ProductItem = (props) => {
    return (
        <Grid container alignItems="flex-start" className={props.clsName}>
            <Grid item xs={6}>
                <Link to="/touchstable/inches">
                    <img src={productOne} className="width-full" alt="smart watch"/>
                </Link>
            </Grid>
            <Grid item xs={6} className="ph-x1 pv-x1 lg-ph-x0p25 lg-pv-x0p25">
                <Link to="/touchstable/inches">
                    <p className="text-x4 lg-text-x3 text-medium lg-mb-x1 mb-x1 lg-mb-x1">{props.title}</p>
                    <p className="flex-align-center text-x2 lg-text-x2 text-medium">Shop now <ArrowRightAltIcon /></p>
                </Link >
            </Grid>
        </Grid>
    )
}

export default ProductItem