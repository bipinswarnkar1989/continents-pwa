import React from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import {
  cleanup,
  render,
  fireEvent,
  wait,
  waitForDomChange,
  getByTestId
} from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { getContinent } from '../queries';
import { mockApolloClient } from '../test-helpers';
import ContinentDetails from './ContinentDetails';

describe('ContinentDetails', () => {
    afterEach(cleanup);

    it('should render continent details', async() => {
          
        const client =  mockApolloClient([
            {
                request: { query: getContinent, variables: { code: 'AF' } },
                result: {
                    data: {
                        continent:  {
                            __typename: 'Continent',
                            "code": "AF",
                            "name": "Africa",
                            "countries": [
                              {
                                "code": "AO",
                                "name": "Angola",
                                __typename: 'Country',
                              },
                            ]
                        }
                    }
                }
            }
        ]);

        const history = createBrowserHistory();

        {
            const { container, getByTestId } = render(
                <ApolloProvider client={client}>
                   <ContinentDetails history={history} code={'AF'}/>
                </ApolloProvider>
            );

            await waitForDomChange({ container });

            const code = getByTestId('code');
            const name = getByTestId('name');
            const countriesLength = getByTestId('countries-length');
          
            await wait(() =>  expect(code.innerHTML).toBe('AF'));
            await wait(() =>  expect(name.innerHTML).toBe('Africa'));
            await wait(() =>  expect(countriesLength.innerHTML).toBe('1'))
              

        }
       
    })
})