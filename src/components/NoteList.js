import React, { useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GETNOTES } from '../graphql/querys';
import { useUpdateNote } from '../hooks';
import { NoteEditModalContainer } from '../containers';
import Masonry from 'react-masonry-component';
import Modal from '@material-ui/core/Modal';
import { Note } from './Note';
import { NoteEditModal } from './NoteEditModal';

function NoteList() {
  const { data } = useQuery(GETNOTES);
  const [open, setOpen] = useState(false);
  const { modifiedNote, handleChange, performUpdate, setNote } = useUpdateNote(null);

  const handleOpen = (note) => {
    setNote(note);
    setOpen(true);
  };

  const handleClose = async () => {
    setOpen(false);
    await performUpdate();
    setNote(null);
  };

  return (
    <React.Fragment>

      <Masonry>
        {data ? data.notes.map((note) => (
          <Note
            note={note}
            key={note.id}
            onEdit={handleOpen}
          />
        )) : null}
      </Masonry>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <NoteEditModalContainer>
          <NoteEditModal note={modifiedNote} onChange={handleChange} close={handleClose} />
        </NoteEditModalContainer>
      </Modal>

    </React.Fragment>
  );
}

export { NoteList };
