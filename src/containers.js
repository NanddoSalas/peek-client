import styled from 'styled-components';
import { Paper } from '@material-ui/core';

const FormContainer = styled.div`
  margin: auto;
  margin-top: 80px;
  @media screen and (min-width: 600px) {
    width: 350px;
  };
`;

const FormPaper = styled(Paper)`
  padding: 0px 16px 16px 16px;
`;

export { FormContainer, FormPaper };
