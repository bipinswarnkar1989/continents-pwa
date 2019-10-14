import { gql } from "apollo-boost";

export const getContinents = gql`
    query Continents {
        continents{
            code
            name
            countries{
              code
            }
        }
    }
`;

export const getContinent = gql`
    query Continent($code: String!) {
        continent(code: $code){
            code
            name
            countries{
              code
              name
            }
        }
    }
`;