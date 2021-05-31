import styled,{keyframes} from 'styled-components';
import Laptop from '../assets/macbook.svg';
import { media } from '../components/utils/stylesVariables';

const rotation = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(359deg);
    }
`;

export const HomepageWrapper = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
`;

export const UnderConstructionwrapper = styled.div`
      display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const LaptopWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:48%;
  min-height: 248px;
`;

export const LaptopImg = styled.div`
  background-image: url(${Laptop});
  background-repeat: no-repeat;
  width: 308px;
  height: 268px;
  position: absolute;
  ${media.mobileAndTablet}{
    width: 260px;
  }
  `;

export const IconWrapper = styled.div`
  height: 50%;
.fa-cog{
  font-size:60px;
  color:#ECC091;
  animation: ${rotation} 2s infinite linear;
  margin-bottom: 32px;
};
  ${media.mobileAndTablet}{
    height: 60%;
  }
`;

export const UnderConstructionText = styled.div`
  color:#ECC091;
  font-family: Arvo-Regular;
  font-size:48px;
  //font-weight: 700;
`;

export const UnderConstructionTextSocial = styled.div`
  color:#ECC091;
  font-family: Arvo-Regular;
  font-size:38px;
  ${media.mobileAndTablet}{
    font-size: 18px;
  }
`;