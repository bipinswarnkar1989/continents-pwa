import React, { useCallback } from "react";
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { getContinents } from '../queries';
import Spinner from '../components/Spinner';

const Table = styled.table`
    border-collapse: collapse;
    width: 100%;
`;

const TableRow = styled.tr`
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    cursor: pointer;

    &:hover {
      background-color:#f5f5f5;
    }
`;

const TableHead = styled.thead`
    color: black;
    background-color: #fff;
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #3f51b5;
    boder-top:1px solid #3f51b5;
`;

const ThRow = styled.tr`
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
`;

const TH = styled.th`
   padding: 8px;
`;

const TD = styled.td`
   padding: 8px;
`;

const HeadingDiv = styled.div`
   display: block;
   padding: 12px;
   text-align: center;
   background-color: #F0F0F0;
   box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.3);

   span{
      font-size: 16px;
      font-weight: bold;
      padding: 10px;
   }
`;

const Contents = (props) => {
  const { data } = useQuery(getContinents);

  const navToContinent = useCallback(
    (code) => {
       props.history.push(`/continent/${code}`)
    },
    [props.history]
  )

  if (data === undefined || data.continents === undefined) {
    return <Spinner/>;
   }
   const { continents } = data;
    return (
        <>
          <HeadingDiv>
          <span>Continent's</span>
          </HeadingDiv>
         <Table>
         <TableHead>
            <ThRow>
              <TH>Code</TH>
              <TH>Name</TH>
              <TH>Countries</TH>
            </ThRow>
         </TableHead>
         <tbody>
         {continents.map(c => 
             <TableRow key={c.code} onClick={navToContinent.bind(null, c.code)} data-testid="continent-item">
                <TD data-testid="code">{c.code}</TD>
                <TD data-testid="name">{c.name}</TD>
                <TD data-testid="clength">{c.countries.length}</TD>
             </TableRow> 
          )}
         </tbody>
         </Table>
        </>
    )
}

export default Contents;