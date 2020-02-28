import React from 'react'
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import imgProductOne from "../assets/images/shop-product1.png"
import imgPersonOne from "../assets/images/shop-person1.jpg";

const Shop = () => {
    return (
        <div className="main shop">
            <div className="carousel-product-slot mv-x2 lg-mv-x1">
                <ul className="text-align-center">
                    <li>
                        <img src={imgProductOne} />
                    </li>
                </ul>
            </div>
            <div className="brand-slot mb-x3 lg-mb-x2">
                <section className="flex-hCenter mh-x1">
                    <div className="lg-display-none width-full mb-x2">
                        <select className="width-full text-x3">
                            <option>Briljant lyd</option>
                            <option>Brukervennlig</option>
                            <option>Lydopplevelse tilpasset deg</option>
                        </select>
                    </div>
                    <nav className="xs-display-none mt-x1p25 mb-x0p5">
                        <ul>
                            <li className="mr-x1 active"><Link className="lg-text-x3 text-medium">Briljant lyd</Link></li>
                            <li className="mr-x1"><Link className="lg-text-x3 text-medium">Brukervennlig</Link></li>
                            <li className="mr-x1"><Link className="lg-text-x3 text-medium">Lydopplevelse tilpasset deg</Link></li>
                        </ul>
                    </nav>
                </section>
                <section className="primary-benefit">
                    <div className="pb-x1p5 lg-pb-x1 mb-x0p5 lg-mb-x0p75 mh-x2 text-x7 text-medium bb-x1">
                        <p className="text-align-center">Briljant lyd</p>
                    </div>
                    <div className="mt-x2 mb-x3 lg-mv-x0p25 ph-x2 text-x4 lg-text-x3">
                        <Grid container justify={"space-between"} alignItems="flex-start">
                            <Grid item xs={12} sm={5}>
                                <p className="mb-x3 lg-mb-x1p5 text-medium">Vi skaper framtidens lytting.</p>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <p className="text-regular">Som et programvaredrevet lydselskap skaper Sonos teknologi som feirer lyd, finjusterer lytteopplevelsen kontinuerlig og setter lytterne i kontakt med skaperne.</p>
                            </Grid>
                        </Grid>
                    </div>
                </section>
            </div>
            <div className="content-slot-mid mv-x2 mh-x1">
                <Grid container className="text-slot pa-x2">
                    <div className="space-box lg-display-none"></div>
                    <Grid item xs={12} sm={6} className="mb-x1 lg-mb-x0p5 text-x5 lg-text-x5 text-medium">
                        Engineered for listening
                    </Grid>
                    <Grid item xs={12} sm={5} className="lg-mt-x0p5 text-x2 lg-text-x2 text-regular mb-x1 lg-mb-x0p5">
                        With a team of world-class experts in acoustics and engineering, Sonos meticulously designs speakers from the inside out, combining custom woofers and tweeters with proprietary software.
                    </Grid>
                </Grid>
                <div className="show-video"></div>
                <div className="carousel-person-slot mt-x2 lg-mt-x3">
                    <div className="sticky">
                        <p className="mb-x1 lg-mb-x0p5 text-x5 lg-text-x3 text-medium">Finjustert av Oscar- og Grammy-vinnere</p>
                        <p className="mb-x1 lg-mb-x0p5 text-x2 lg-text-x1 text-regular">
                            Sonos avveier lydvitenskapen mot kreative innspill fra kjente produsenter, miksere og utøvere som Rick Rubin, Chris Jenkins,
                            Manny Marroquin, Emily Lazar, Tom Elmhirst, Noah Goldstein og Nigel Godrich. De samarbeider med Sound Experience Leader Giles Martin og gir
                            tilbakemelding gjennom hele produktutviklingsprosessen. Dette for å sikre at høyttalerne våre opprettholder den
                            følelsesmessige hensikten til arbeidet deres.
                        </p>
                        <p className="lg-mt-x0p5 lg-text-x1 text-medium text-align-right display-none lg-display-block">1/7</p>
                    </div>
                    <ul>
                        <li>
                            <img src={imgPersonOne} className="width-full" />
                        </li>
                    </ul>
                </div>
            </div>
            <div className="content-slot-bottom xs-mh-x2 lg-mh-x3">
                <p className="mb-x1 lg-mb-x0p5 text-x5 text-regular">
                    We believe the sound of music or a great movie should fill your home as purely and honestly as possible.
                </p>
                <p className="mb-x1 lg-mb-x0p5 text-x2 lg-text-x2 text-regular">
                    — Giles Martin  /   Sonos Sound Experience Lead
                </p>
            </div>
        </div>
    )
};

export default Shop