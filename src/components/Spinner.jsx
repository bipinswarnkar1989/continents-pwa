import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const SpinnerDiv = styled.div`
  display: flex;
  width: 99%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Spinnner = () => <SpinnerDiv><FontAwesomeIcon icon={faSpinner} size="3x"/></SpinnerDiv>;

export default Spinnner;