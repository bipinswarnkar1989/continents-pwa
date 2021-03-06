import React, { useCallback } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

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
  width: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;

  span{
    color: white;
    font-size: 25px; 
  }
`;

const BackNav = styled.div`
   width: 100px;
   height: 100%;
   display: flex;
   align-items: center;
   color: white;
`;

const Header = () => {
   let history = useHistory();
   const navToHome = useCallback(
      () => {
         history.push('/');
      },
      [history]
   )
    return (
         <Container>
            <Inner>
            {history.location.pathname !== '/' && 
              <BackNav onClick={navToHome.bind(null)}><FontAwesomeIcon style={{cursor: 'pointer'}} icon={faArrowLeft}  color="white" inverse/></BackNav>
            }
            <Logo><span>AJ</span></Logo>
            </Inner>
         </Container>
    )
}

export default Header;