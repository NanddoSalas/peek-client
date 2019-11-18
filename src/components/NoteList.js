import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GETNOTES } from '../graphql/querys';
import { NOTES_SUBSCRIPTION } from '../graphql/subscriptions';
import { useUpdateNote } from '../hooks';
import { NoteEditModalContainer } from '../containers';
import Masonry from 'react-masonry-component';
import Modal from '@material-ui/core/Modal';
import { Note } from './Note';
import { NoteEditModal } from './NoteEditModal';

function NoteList() {
  const { data, subscribeToMore } = useQuery(GETNOTES);
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

  useEffect(() => {
    subscribeToMore({
      document: NOTES_SUBSCRIPTION,
      updateQuery: (prev, { subscriptionData }) => {
        if (!subscriptionData.data) return prev;
        const newNote = subscriptionData.data.noteAdded;

        const repeated = prev.notes.find((note) => note.id === newNote.id);
        if (repeated) return prev;

        return Object.assign({}, prev, {
          notes: [newNote].concat(prev.notes),
        });
      },
    });
  }, [subscribeToMore]);

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
