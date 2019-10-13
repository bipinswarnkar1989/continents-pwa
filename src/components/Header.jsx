import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   display: block;
   position: fixed;
   top:0;
   left:0;
   width: 100%;
   background-color: #fff;
   z-index: 1000;
`;

const Inner = styled.div`
   width: 100%;
   height: 64px;
   color: #fff;
   background-color: #3f51b5;
   box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);
   padding: 0 20px;
`;

const Logo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;

  .span{
    color: white;
    font-size: 25px; 
  }
`;

const Header = () => {
    return (
         <Container>
            <Inner>
            <Logo><span>AasaanJobs</span></Logo>
            </Inner>
         </Container>
    )
}

export default Header;