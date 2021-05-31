import styled,{keyframes} from 'styled-components';
import LogoImage from '../../assets/portfolio/logo/signboard_coffeeShop.jpg';
import WebImage from '../../assets/portfolio/web/LandingPage_CakeFactory.jpg';
import MobileImage from '../../assets/portfolio/mobile/360px_mobile.jpg';
import {media} from "../../components/utils/stylesVariables";

const seeMoreAnimation = keyframes`
0%{
  transform:translateX(4px);
}
50% {
  transform:translateX(8px);
}
100%{
  transform:translateX(4px);
}
`;

const spinLetters = keyframes`
  0%,100% {
    transform: rotate(-5.9deg) translateX(0%);
  }
  50% {
    transform: rotate(-5.9deg) translateX(-100%);
  }
`;



export const PortofolioSectionWrapper = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px 0 80px 0;
  ${media.mobileAndTablet}{
    display: none
  }
`;

export const PortofolioSectionTitle = styled.div`
  color:#402E32;
  font-size:80px;
  font-family:'Open Sans', sans-serif;
  cursor:default;
`;

export const PortofolioBoxesWrapper = styled.div`
  display:flex;
  width: 100%;
  justify-content: space-evenly;
  margin: 64px 0 0 0 ;
  padding-bottom: 28px;
`;

export const PortofolioLogoBox = styled.div`
  width: 28%;
    height:359px;
    cursor:pointer;
  position: relative;
  transition: all 0.2s;
  border-radius: 3px;
  border: 1px solid rgb(218, 234, 249);
  box-shadow: rgb(0 0 0 / 29%) 0px 6px 20px;
  :hover .middle {
    opacity: 1;
  };
  :hover .image {
    filter: grayscale(80%);
    opacity: 0.3;
  };
  :hover{
    transform: translate(0,-8px);
    box-shadow:#8DA092 0px 0px 9px 0px;
  }
`;

export const PortofolioLogoDescription = styled.div`

`;

export const PortofolioLogoImage = styled.div`
  background-image:url(${LogoImage});
  background-repeat: no-repeat;
  height: 100%;
  opacity: 1;
  display: block;
  width: 100%;
  transition: .5s ease;
  backface-visibility: hidden;
  background-size: contain;
`;

export const PortofolioWebBox = styled.div`
  width: 28%;
  height:359px;
  cursor:pointer;
  position: relative;
  transition: all 0.2s;
  border-radius: 3px;
  border: 1px solid rgb(218, 234, 249);
  box-shadow: rgb(0 0 0 / 29%) 0px 6px 20px;
  :hover .middle {
    opacity: 1;
  };
  :hover .image {
    filter: grayscale(80%);
    opacity: 0.3;
  };
  :hover{
    transform: translate(0,-8px);
    box-shadow:#8DA092 0px 0px 9px 0px;
  }
`;

export const PortofolioWebDescription = styled.div`

`;

export const PortofolioWebImage = styled.div`
  background-image:url(${WebImage});
  background-repeat: no-repeat;
  height: 100%;
  opacity: 1;
  display: block;
  width: 100%;
  transition: .5s ease;
  backface-visibility: hidden;
  background-size: contain;
`;

export const PortofolioMobileBox = styled.div`
  width: 28%;
  height:359px;
  cursor:pointer;
  position: relative;
  transition: all 0.2s;
  border-radius: 3px;
  border: 1px solid rgb(218, 234, 249);
  box-shadow: rgb(0 0 0 / 29%) 0px 6px 20px;
  :hover .middle {
    opacity: 1;
  };
  :hover .image {
    filter: grayscale(80%);
    opacity: 0.3;
  };
  :hover{
    transform: translate(0,-8px);
    box-shadow:#8DA092 0px 0px 9px 0px;
  }
`;

export const PortofolioMobileDescription = styled.div`

`;

export const PortofolioMobileImage = styled.div`
  background-image:url(${MobileImage});
  background-repeat: no-repeat;
  height: 100%;
  opacity: 1;
  display: block;
  width: 100%;
  transition: .5s ease;
  backface-visibility: hidden;
  background-size: contain;
`;

export const SeeMoreButton = styled.div`
  background-color:#ECC091;
  width: 108px;
  height: 24px;
  display:flex;
  align-items:center;
  border-radius:8px;
  justify-content:center;
  cursor:pointer;
  :hover{
    background-color:#8DA092;
    color:#8DA092;
    box-shadow: rgb(0 0 0 /37%) 0px 0px 9px 0px;
    >div {
      animation: ${seeMoreAnimation} 1s infinite;
    }
  }
`;

export const Icon = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin-left: 4px;
`;

export const SeeMoreText = styled.div`
  font-family: 'Open Sans';
  height: 100%;
  font-size:16px;
  color:#171616;
  display: flex;
  align-items: center;
`;

export const BoxContent = styled.div`
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
`;