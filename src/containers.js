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

const CreateNoteFormContainer = styled.div`
  margin: 16px 8px;
  @media screen and (min-width: 600px) {
    margin: 32px auto 16px auto;
    width: 580px;
  };
`;

export { FormContainer, FormPaper, CreateNoteFormContainer };
