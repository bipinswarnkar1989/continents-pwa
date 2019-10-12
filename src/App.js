import React from 'react';
import Routes from './routes';
import styled from 'styled-components';
import Header from './components/Header';

const Container = styled.div`
   display: 'flex';
`;

function App() {
  return (
    <Container>
        <Header/>
       <Routes/>
    </Container>
  );
}

export default App;
