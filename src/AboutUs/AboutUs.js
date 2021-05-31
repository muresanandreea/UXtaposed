import React from "react";
import {AboutWrapper,AboutUsContent,AboutUsText} from './AboutUs.style';
import {OurPortfolio, OurPortfolioTitle} from "../Portfolio/Portfolio.style";
import {ContactUsWidget} from "../components/utils/contactUsWidget/ContactUsWidget";

export const About = ({onClose}) => {
    return (
        <AboutWrapper>
            <OurPortfolio>
                <OurPortfolioTitle>About <b>Us</b></OurPortfolioTitle>
            </OurPortfolio>
            <AboutUsContent>
                <AboutUsText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </AboutUsText>
                <ContactUsWidget onClose={onClose}/>
            </AboutUsContent>
        </AboutWrapper>
    )
}
