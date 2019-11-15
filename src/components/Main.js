import React from 'react';

import { CreateNoteFormContainer, NotesContainer } from '../../containers';

import { Appbar } from '../Appbar';
import { CreateNoteForm } from '../CreateNoteForm';
import { NoteList } from '../NoteList';

function Main() {
  return (
    <React.Fragment>

      <Appbar />

      <CreateNoteFormContainer>
        <CreateNoteForm />
      </CreateNoteFormContainer>

      <NotesContainer>
        <NoteList />
      </NotesContainer>

    </React.Fragment>
  );
}

export { Main };
