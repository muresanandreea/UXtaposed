import React from 'react';
import {FooterWrapper, IconsWrapper,Icon,Divider,CopyrightText,PrivacyPolicyText,ContentWrapper} from './Footer.style';
import './Footer.css';

export const Footer = () => {

    return (
        <FooterWrapper>
            <Divider/>
            <ContentWrapper>
                <IconsWrapper>
                    <div className="wrapper">
                        <ul>
                            <li className="facebook"><a href="https://www.facebook.com/UXtaposed-106791008142813" target="_blank"><i className="fa fa-facebook fa-2x" aria-hidden="true"></i></a></li>
                            <li className="twitter"><a href="https://twitter.com/xtaposed" target="_blank"><i className="fa fa-twitter fa-2x" aria-hidden="true"></i></a></li>
                            <li className="instagram"><a href="https://www.instagram.com/uxtaposed/" target="_blank"><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></a></li>
                            <li className="linkedin"><a href="https://www.linkedin.com/in/uxtaposed-design-and-development-b0aa84208/" target="_blank"><i className="fa fa-linkedin fa-2x" aria-hidden="true"></i></a></li>
                        </ul>
                    </div></IconsWrapper>
                <CopyrightText>Copyrights© 2021 UXtaposed</CopyrightText>
                <PrivacyPolicyText>Privacy Policy</PrivacyPolicyText>
            </ContentWrapper>
        </FooterWrapper>
    )
}

