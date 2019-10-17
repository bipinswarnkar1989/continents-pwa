import React from "react";
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { getContinent } from '../queries';
import Spinner from '../components/Spinner';

const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Code = styled.div`
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background-color: red;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span{
      color: #fff;
      font-size: 16px;
      font-weight: bold;
    }
`;

const Name = styled.div`
    padding: 10px;
    text-align: center;
    font-weight: bold;
    font-family: Roboto, sans-serif;
`;

const CountriesHead = styled.div`
   padding: 8px;
   background-color:#f5f5f5;
   width: 50%;
   text-align: center;

   span{
      font-weight: bold;
   }
`;

const CountriesList = styled.ul`
   
`;

const CountriesListItem = styled.li`
   
`;


const HeadingDiv = styled.div`
   display: block;
   padding: 10px;
   text-align: center;
   position: relative;

   span{
      font-size: 16px;
      color: #515F79;
      
   }
`;

const ContinentDetails = props => {
  const { data } = useQuery(getContinent, { variables: { code: props.code } });

  if (data === undefined || data.continent === undefined) {
    return <Spinner/>
   }
   const { continent } = data;
    return (
        <>
          <HeadingDiv>
          <span>Continent Details</span>
          </HeadingDiv>
          <ContentCard>
          <Code><span data-testid="code">{continent.code}</span></Code>
          <Name data-testid="name">{continent.name}</Name>
          <CountriesHead><span data-testid="countries-length">{continent.countries.length}</span> Countries :</CountriesHead>
          <CountriesList data-testid="country-item">
          {continent.countries.map(c => <CountriesListItem key={c.code} data-testid="country-item-name">{c.name}</CountriesListItem>)}
          </CountriesList>
          </ContentCard>

        
            
                {/* <TD>{continent.code}</TD>
                <TD>{continent.name}</TD>
                <TD>{continent.countries.length}</TD> */}
          
        </>
    )
}

export default ContinentDetails;