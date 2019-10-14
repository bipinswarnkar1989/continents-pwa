import React from 'react';
import Routes from './routes';
import styled from 'styled-components';


const Container = styled.div`
   flex: 1;
   padding: 10px;
`;

function App() {
  return (
    <Container>
       
       <Routes/>
    </Container>
  );
}

export default App;
