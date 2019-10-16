import React from 'react';
import Routes from './routes';
import styled from 'styled-components';


const Container = styled.div`
   flex: 1;
   padding: 10px;
`;

// Application Wrapper function
function App() {
  return (
    <Container>
       <Routes/>
    </Container>
  );
}

export default App;
