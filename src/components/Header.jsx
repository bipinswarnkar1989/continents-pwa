import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   background-color: blue;
`;

const Title = styled.span`
  color: white;
  font-size: 20px;
`;

const Header = () => {
    return (
         <Container>
             <Title>PWA</Title>
         </Container>
    )
}

export default Header;