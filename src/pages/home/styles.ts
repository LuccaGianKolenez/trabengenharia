import styled from 'styled-components';

export const Container = styled.div`
  body {
    background: transparent linear-gradient(180deg, #3FE1A1 0%, #2AD39A 100%) 0% 0% no-repeat padding-box;
  }
`;

export const ContainerSection = styled.div`
    border-radius: 100px 100px 0px 0px ;
    background: #FFFFFF 0% 0% no-repeat padding-box; 
    margin: 59px auto 0 auto;
    max-width: 1094px;
    max-height: 100%;
    min-height: 100%;
   
    
    @media (max-width: 600px) {
        max-width: 100%;
        margin: 40px auto 0 0;
        margin-left: 0px;
        margin-right: 0px;
        border-radius: 50px 50px 0px 0px ;
        
    }
    
`;

export const BigTitle = styled.div`
    font: normal normal bold 14px/19px Noto Sans, sans-serif;
    font-weight: bold;  
    font-size: 20px;
    margin: 47px 37px 0 149px;
    letter-spacing: 0px;
    color: #000000DE;
    opacity: 1;
    padding-top: 47px;
   
    @media (max-width: 600px) {
      max-width: 100%;
      margin: 35px 37px 0 40px;
    }
`;



export const HighLighted = styled.div`
    font: normal normal bold 14px/19px Noto Sans, sans-serif;
    font-weight: bold;
    font-size: 14px;
    margin: 47px 37px 0 111px;


    @media (max-width: 600px) {
      max-width: 100%;
      margin: 24px 37px 0 40px;
    }
`;

export const GoogleLink = styled.div`
    margin: 24px 37px 0px 111px;

    @media (max-width: 600px) {
      max-width: 100%;
      margin: 24px 37px 0 40px;
    }
`;

export const FormRegister = styled.div`
 
    margin: 24px 0px 0px 111px;

    @media (max-width: 600px) {
      max-width: 100%;
      margin: 24px 37px 0 40px;
    }

`;

export const BlockAuth = styled.div`
     padding: 0;
     width: 502px;
     float: left;
     background: #FFFFFF 0% 0% no-repeat padding-box; 
  
     @media (max-width: 600px) {
        margin-top: -1px;
        padding: 0;
        width: 100%;
       

      
     }
`;


export const Usina = styled.div`
    float: right;
    padding: 0;
    background-color: #ffffff;
    width: 592px;
    margin-top: -1px;

    img {
      margin-top: 338px;
      width: 100%;
      height: 100%;
    }
   
    @media (max-width: 600px) {
       padding: 0;
       width: 100%;

       img {
        margin-top: 0px;
        width: 100%;
        height: 100%;
      }

    }

`;
