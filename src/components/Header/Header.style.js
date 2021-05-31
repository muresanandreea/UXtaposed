import styled, {keyframes} from 'styled-components';
import Logo from '../../assets/logo.svg';
import {media} from "../utils/stylesVariables";


const nohover = keyframes`
  0% {
    transform: scaleX(1.05);
    height: 3.8rem;
  }
  45% {height: 5px;}
  55% {
    transform: scaleX(1.05);
    height: 5px;
    opacity: 1;
  }

  100% {
    transform: scaleX(0);
    height: 5px;
    opacity: .02;
  }
`

const hover = keyframes`
  0% {
    transform: scaleX(0);
    height: 5px;
  }
  45% {
    transform: scaleX(1.05);
    height: 5px;
  }
  55% {height: 5px;}
  100% {
    transform: scaleX(1.05);
    height: 3.8rem;
  }
`;

const mobileMenuEnter = keyframes`
  0%{
    bottom: 100%;
    opacity: 0;
  }
  100%{bottom: 0;
    opacity: 1}
`;

export const Wrapper= styled.div`
  top:0;
  display:flex;
  width: 100%;
  height:7rem;
  background-color:#000;
  box-shadow: rgb(0 0 0 /37%) 0px 0px 9px 0px;
  align-items: center;
  position:fixed;
  justify-content: space-between;
  z-index:1;
  .spot {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding:0;
    margin:0;
  };
  .svg-wrapper {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 272px;
    /*make sure to use same height/width as in the html*/
    height: 40px;
    border-radius: 3px;
    margin-left: 5px;
    margin-right: 5px;
    padding:0;
  }
  /*
    This is where we define the fill, color, thickness,
    and stroke pattern of the SVG when there is no hover.
    The dasharray and offset together define the line position
    under the words. Here's also where the transition speed is set.
  */

  #shape {
    stroke-width: 3px;
    fill: transparent;
    stroke: #06D6A0;
    stroke-dasharray: 254 400;
    stroke-dashoffset: -321;
    transition: 1s all ease;
    padding:0;
    margin:0;
    :hover{
      stroke-dasharray: 40 0;
      stroke-width: 3px;
      stroke-dashoffset: 0;
      stroke: #06D6A0;
    }
  }
  /* 
      Pushing the text up into the SVG. Without this the
      text would be below the div's.
  */
  .text {
    margin-top: -35px;
    font-family:'Open Sans', sans-serif;
    letter-spacing: 0.15em;
    text-align: center;
    text-transform: uppercase;
    padding:0;
    color:#06D6A0;
    margin:0;
  }

`;

export const LogoWrapper= styled.a`
  background-image:url(${Logo});
  background-repeat: no-repeat;
  background-size: contain;
  width:412px;
  height: 90%;
  transition: all 0.3s ease 0s;
  margin-left: 2%;
  text-decoration: none;
  ${media.mobileAndTablet}{
    height: 40%;
  }
`;

export const SideMenuButtonWrapper= styled.div`
  width:50px;
  height: 50px;
  transition: all 0.3s;
  transform: ${props=>(props.isOpen ? '' : 'scale(0.7)')};
  position: relative;
  box-sizing: border-box;
  cursor:pointer;
  display: none;
  margin-right: 4%;
  ${media.mobileAndTablet}{
    display: flex;
    z-index: 21;
  }
`;

export const ButtonWrapper = styled.a`
  display:flex;
  opacity:1;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  margin:0 10px;
  text-decoration: none;
`;

export const RequestButtonWrapper = styled.div`
  display:flex;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  border-radius:16px;
  margin-left:4rem;
`;


export const ButtonText = styled.div`
  font-size: 16px;
  color: #E6E7E8;
  font-family:'Open Sans-Bold', sans-serif;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  display:flex;
  align-items:center;
  justify-content: center;
  cursor:pointer;
  font-weight: normal;
  text-align: center;
  margin:0 10px;
  z-index: 1;
  :hover{    color:#06D6A0; transition: 0.2s ease-in-out all}
  display: inline-block;
  padding: 16px 2px;
  position: relative;
}
:after {
  background: none repeat scroll 0 0 transparent;
  bottom: 0;
  content: "";
  display: block;
  height: 1px;
  left: 50%;
  position: absolute;
  background: #06D6A0;
  transition: width 0.3s ease 0s, left 0.3s ease 0s;
  width: 0;
}
:hover:after {
  width: 100%;
  left: 0;
}
`;

export const SideMenuWrapper = styled.div``;

export const HeaderDesktopContent = styled.div`
  display:flex;
  justify-content:flex-end;
  flex:1;
  margin-right:4%;
  ${media.mobileAndTablet}{
    display: none}
`;

export const MobileMenuWrapper = styled.div`
    position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  z-index: 10;
  animation: ${mobileMenuEnter} 0.2s ease-in forwards;
  flex-direction: column;
  align-items: center;
  display: none;
  ${media.mobileAndTablet}{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MobileMenuItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 60vh;
  width: 100vw;
  justify-content: center;
  font-size: 18px;
`;

export const LinkItem = styled.a`
  text-decoration: none;
  color: #000;
  padding-top: 20px;
  font-family:'Open Sans', sans-serif;
  letter-spacing: 0.15em;
`;

export const SideMenuButtonLine = styled.span`
  width: 38px;
  height:3px;
  position:absolute;
  left:14px;
  transition: all 0.3s;
  background-color: ${props=>(props.isOpen ? '#000':'#06D6A0')};
  border-radius: 3px;
`;

export const SideMenuButtonLineThreeBasic = styled.span`
  width: 24px;
  height:3px;
  position:absolute;
  left:14px;
  transition: all 0.3s;
  background-color: ${props=>(props.isOpen ? '#000':'#06D6A0')};
  border-radius: 3px;
  
`;

export const SideMenuButtonLineOne = styled(SideMenuButtonLine)`
  top:14px;
  ${props => props.isOpen ? `transform: rotate(45deg); width:32px; top:23px`:``}
`;

export const SideMenuButtonLineTwo = styled(SideMenuButtonLine)`
  top:23px;
  ${props => props.isOpen ? `width:0px; left:25px`:``}
`;

export const SideMenuButtonLineThree = styled(SideMenuButtonLineThreeBasic)`
  top:33px;
  ${props => props.isOpen ? `transform: rotate(-45deg);width:32px; top:23px`:``}
`;

