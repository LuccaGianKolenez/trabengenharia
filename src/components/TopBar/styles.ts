import styled from 'styled-components';

export const Section = styled.nav`
    padding: 0;
    max-width: 101%;
    min-wdith: 101%;
    margin: -1px;
    height: 50px;
    border-style: hidden;

    background: #FAFAFA;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);

    .logo{
        width:80px;
        height:25px;
        border-radius:10px;
        text-align:center;
        float:left;
    }

    .menu{
        width:100px;
        height:;
        background:transparent;
        text-align:center;
    }

    .menu:hover{
        background:#eaf4fd;
    }
    .gridMenu{
        display:grid;
        grid-template-columns: auto auto auto auto auto auto auto;
        width:80%;
        height:50px;
        
    }

    .gridMenu a{
        padding-top: 12px;
        cursor:pointer;
        outline:none;
        color:black;
        text-decoration:none;
    }

    @media only screen and (max-width: 600){
        box-shadow: 10px 3px 3px -1px rgba(0, 0, 0, 0.9);
        border: 10px solid black;
    }
   
`;


export const Alignment = styled.div`
    display: flex;
    justify-content: space-between;
    max-width: 1094px;
    padding: 15px;
    @media (max-width: 600){
        max-width: 100%;
    }
`;

export const Logo = styled.div`
    margin-left:0;
    margin-right:0;
    width: 68px;
    height: 32px;
    cursor:default;
    margin-right:auto;
`;


