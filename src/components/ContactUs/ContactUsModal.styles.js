import styled,{keyframes} from 'styled-components';
import Logo from '../../assets/contactUsLogo.svg';
import {media} from "../utils/stylesVariables";

const showBackDrop = keyframes`
  0%{
    background-color: rgba(40,40,40,0);
  }
  100%{
    background-color: rgba(40,40,40,0.5);
  }
`;

const hideBackDrop = keyframes`
  0%{
    background-color: rgba(40,40,40,0.5);
  }
  100%{
    background-color: rgba(40,40,40,0);
  }
`;

const openModal = keyframes`
  0%{
    opacity:0
  }
  100%{
    opacity: 1;
  }
`;

const closeModal = keyframes`
  0%{
    opacity:1
  }
  100%{
    opacity:0;
  }
`;

export const Backdrop = styled.div`
  width:100vw;
  height:100vh;
  position:fixed;
  z-index:100;
  left:0;
  top:0;
  animation: ${props => (props ? showBackDrop : hideBackDrop)} 0.4s 
      ${props => (props.showBackdrop ? 'ease-in' : 'ease-out')};
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(40,40,40,0.5);
`;

export const Modal = styled.div`
  z-index:500;
  background: radial-gradient(circle at 30% 107%, #7DA487 0%, #7DA487 5%, #8DA092 45%,#7DA487 60%,#8DA092 90%);
  box-sizing: border-box;
  ${props => (props.showBackdrop ? 'animation: ${openModal} 0.4s ease-in' : 'animation: ${closeModal} 0.4s ease-out')};
  display: flex;
  justify-content: center;
  position: relative;
  width: 50vw;
  height: 74vh;
  min-width: 340px;
  border-radius: 0;
  ${media.mobileAndTablet}{
    width: 60vw;
    height: 90vh;
    background: #fff;
    border-radius: 0;
  }
`;

export const ModalContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

export const CloseButton = styled.div`
  position: relative;
  transition: transform .25s, opacity .25s;
  opacity: .7;
  cursor: pointer;
  font-size: 2em;
  font-family: serif;
  line-height: 1;
  :before{
    content: "\\d7";
  };
    :hover{
      cursor: pointer;
        transform:rotate(180deg);
      }
`;


export const FormContact = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-bottom: 20px;
  align-items: flex-start;
`;


export const LogoWrapper = styled.div`
  background-image: url(${Logo});
  width: 228px;
  height: 141px;
  background-repeat: no-repeat;
  padding-bottom: 10%;
  padding-right: 24px;
  ${media.mobileAndTablet}{
    display: none;
  }
`;


export const ContactUsFormWrapper = styled.div`
  width: 60%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .submit{
    width: 88px;
    height: 32px;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:lavender;
    background-color: #fff;
    font-family: Helvetica-regular;
    font-size:18px;
    cursor:pointer;
    margin-top:2vh;
    :hover{
      background-color: #7DA487;
    }
  };
  ${media.mobileAndTablet}{
    width: 100%;
  }
`;

export const Title = styled.h2`
  color: rgba(0, 0, 0, 0.54);
  padding: 0;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: 400;
  line-height: 1;
  cursor:default;
`;

export const InputWrapper = styled.div`
  padding-top:20px;
`;
