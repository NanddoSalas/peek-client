import React from 'react';
import PropTypes from 'prop-types';

import { Container, Forms, FormFake, ButtonGroup, Button, TitleFormStyle, TextFormStyle } from './BaseNoteForm';
import ContentEditable from "react-contenteditable";

function NoteEditModal({ note, onChange, close }) {
  return (
    <Container>
      <Forms>

        <FormFake
          show={note.title}
          size="16px"
        >Title</FormFake>
        <ContentEditable
          style={TitleFormStyle}
          html={note.title}
          onChange={({ target }) => onChange('title', target.value)}
        />

        <FormFake
          show={note.text}
          size="14px"
        >Create note...</FormFake>
        <ContentEditable
          style={TextFormStyle}
          html={note.text}
          onChange={({ target }) => onChange('text', target.value)}
        />

      </Forms>

      <ButtonGroup>

        <Button
          style={{ marginLeft: 'auto' }}
          isActive={true}
          onClick={() => close()}
        >Close</Button>

      </ButtonGroup>

    </Container>
  );
}

NoteEditModal.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
  }),
  onChange: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
};

export { NoteEditModal };
