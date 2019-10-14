import React from 'react';
import Routes from './routes';
import styled from 'styled-components';
import Header from './components/Header';

const Container = styled.div`
   flex: 1;
   padding: 10px;
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
