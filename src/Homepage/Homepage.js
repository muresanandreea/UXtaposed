import React from "react";
import {HomepageWrapper,UnderConstructionwrapper, IconWrapper, UnderConstructionText,
    UnderConstructionTextSocial, LaptopWrapper, LaptopImg} from './Homepage.style';
import {MidSection} from "./MidSection/MidSection";
import {PortofolioSection} from "./PortfolioSection/PortfolioSection";
import Image1 from '../assets/anotherStormTrooper.jpg';
import Image2 from '../assets/bobaFett.jpg';
import Image3 from '../assets/stormTrooper.jpg';
import Slider from '../components/utils/imageSlider/Slider';

export const Homepage = () => {

    const images=[
        Image1,Image2,Image3
    ];

    return (
        <HomepageWrapper>
            {/*<Hero/>*/}
            <Slider slides={images} autoPlay={2} />
            <MidSection/>
            <PortofolioSection/>
            {/*            <UnderConstructionwrapper>
                <LaptopWrapper>
                    <LaptopImg/>
                    <IconWrapper>
                        <i className="fas fa-cog"/>
                    </IconWrapper>
                </LaptopWrapper>
                <UnderConstructionText>COMING SOON</UnderConstructionText>
                <UnderConstructionTextSocial>
                    Meanwhile feel free to interact with our social networks
                </UnderConstructionTextSocial>
            </UnderConstructionwrapper>*/}
        </HomepageWrapper>
    )
}
