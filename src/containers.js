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

const NotesContainer = styled.div`
  width: 100%;
  margin: 16px auto 0 auto;
  padding: 8px;
  @media screen and (min-width: 543px) {
    width: 528px;
  }
  @media screen and (min-width: 960px) {
    width: 784px;
  }
  @media screen and (min-width: 1280px) {
    width: 1040px;
  }
  @media screen and (min-width: 1640px) {
    width: 1296px;
  }
  @media screen and (min-width: 1896px) {
    width: 1552px;
  }
`;

const NoteEditModalContainer = styled.div`
  width: 100%;
  position: absolute;
  top: 25%;
  @media screen and (min-width: 600px) {
    width: 580px;
    left: calc( (100vw - 580px) / 2 );
  };
`;

export { FormContainer, FormPaper, CreateNoteFormContainer, NotesContainer, NoteEditModalContainer };
