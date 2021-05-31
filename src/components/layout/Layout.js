import React from "react";
import {Header} from "../Header/Header";
import {PageRouter} from "../router/PageRouter";
import {Footer} from "../Footer/Footer";
import {BaseWrapper, ContentWrapper} from './Layout.style';


export const Layout = () => {
    return (
        <BaseWrapper>
            <Header/>
            <ContentWrapper>
                <PageRouter/>
            </ContentWrapper>
            <Footer/>
        </BaseWrapper>
    )
}