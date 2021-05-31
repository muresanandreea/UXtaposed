import React from 'react';
import styled,{keyframes} from 'styled-components';
import LogoDev from '../../assets/homepage/Dev.svg';
import LogoDesign from '../../assets/homepage/Design.svg';

const LoadingWrapper = styled.div`
  width: 60vw;
  height: 100vw;
  display: flex;
  justify-content: center;
`;

const firstMove = keyframes`
    0%{left:20%;}
    50%{left:50%;}
    100%{left:20%;}
`
const secondMove = keyframes`
    0%{left:80%;}
    50%{left:50%;}
    100%{left:80%;}
`

const BlobOne = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  background-image: url(${LogoDev});
  background-repeat: no-repeat;
  background-size: contain;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  left: 20%;
  animation: ${firstMove} 2.5s ease infinite;
`;

const BlobTwo = styled.div`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  left: 80%;
  animation: ${secondMove} 2.5s ease infinite;
  background-image: url(${LogoDesign});
  background-repeat: no-repeat;
  background-size: contain;
`;

export const Loading = () => {
    return (
        <LoadingWrapper>
            <BlobOne/>
            <BlobTwo/>
        </LoadingWrapper>
    )}
