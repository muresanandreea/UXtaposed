import styled from 'styled-components';

export const FooterWrapper = styled.div`
  display:flex;
  bottom:0;
  flex-direction:column;
  width: 100%;
  height:20rem;
  background-color:#171616;
  align-items: center;
  justify-content: flex-start;
`;

export const IconsWrapper = styled.div`
  display:flex;
  margin-bottom: 12px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  flex-direction: column;
  margin: 6%;
`;

export const Icon = styled.a`
  cursor:pointer;
  padding:16px;
  height: 15.5px;
  width: 14px;
.fa-linkedin-in{
  color:#ECC091;
  font-size:20px;
  :hover{
    color:#fff;
    box-shadow: 0 0 15px  #fff;
    transition: all 0.5s ease;
  }
};
  .fa-instagram{
    color:#ECC091;
    font-size:20px;
    :hover{
      color:#fff;
      background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);
      border-radius:4px;
      box-shadow: 0 0 15px  #e6683c;
      transition: all 0.5s ease;
    }
  };
  .fa-twitter{
    color:#ECC091;
    font-size:20px;
    :hover{
      color:#1DA1F2;
      box-shadow: 0 0 15px  #1DA1F2;
      transition: all 0.5s ease;
    }
  };
  .fa-facebook-f{
    color:#ECC091;
    font-size:20px;
    :hover{
      color:#4267B2;
      box-shadow: 0 0 15px  #4267B2;
      transition: all 0.5s ease;
    }
  }
`;

export const Divider = styled.div`
  width:84%;
  height:1px;
  background-color:#ECC091;
`;

export const CopyrightText = styled.div`
  color:#E6E7E8;
  font-family:'Open Sans', sans-serif;
  font-size:16px;
  cursor:default;
  margin-bottom: 8px;
`;

export const PrivacyPolicyText = styled.div`
  color:#E6E7E8;
  font-family:'Open Sans', sans-serif;
  font-size:16px;
  cursor:pointer;
  margin-bottom: 40px;
`;

