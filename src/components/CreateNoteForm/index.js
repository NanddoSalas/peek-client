import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { CREATENOTE } from '../../graphql/mutations';
import { GETNOTES } from '../../graphql/querys';
import sanitizeHtml from 'sanitize-html';

import { Container, Forms, FormFake, ButtonGroup, Button, TitleFormStyle, TextFormStyle, TrashIcon } from '../BaseNoteForm';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentEditable from "react-contenteditable";

function CreateNoteForm() {
  const emptyNote = { title: '', text: '' };
  const [{ title, text }, setNote] = useState(emptyNote);
  const [createNote] = useMutation(CREATENOTE, {
    update: (cache, { data: { createNote } }) => {
      const { notes } = cache.readQuery({ query: GETNOTES });
      const repeated = notes.filter((note) => note.id === createNote.id);

      if (!repeated) {
        cache.writeQuery({
          query: GETNOTES,
          data: { notes: [createNote].concat(notes) },
        });
      }

    },
  });

  const handleChangeTitle = ({ target }) => {
    setNote((currentNote) => ({
      ...currentNote,
      title: target.value,
    }));
  };

  const handleChangeText = ({ target }) => {
    setNote((currentNote) => ({
      ...currentNote,
      text: target.value,
    }));
  };

  const handleSaveClick = async () => {
    if (title || text) {
      const note = {
        title: sanitizeHtml(title),
        text: sanitizeHtml(text),
      };

      createNote({
        variables: note,
      });

      setNote(emptyNote);
    }
  };

  return (
    <Container>
      <Forms>

        <FormFake
          show={title}
          size="16px"
        >Title</FormFake>
        <ContentEditable
          style={TitleFormStyle}
          html={title}
          onChange={handleChangeTitle}
        />

        <FormFake
          show={text}
          size="14px"
        >Create note...</FormFake>
        <ContentEditable
          style={TextFormStyle}
          html={text}
          onChange={handleChangeText}
        />
      </Forms>

      <ButtonGroup>

        <TrashIcon
          onClick={() => setNote(emptyNote)}
          isActive={title || text}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </TrashIcon>

        <Button
          isActive={title || text}
          onClick={handleSaveClick}
        >Save</Button>

      </ButtonGroup>

    </Container>
  );
}

export { CreateNoteForm };
