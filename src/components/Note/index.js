import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { DELETENOTE } from '../../graphql/mutations';
import { GETNOTES } from '../../graphql/querys';
import sanitizeHtml from 'sanitize-html';
import CloseIcon from '@material-ui/icons/Close';
import { Card, Title, Text, IconButton } from './styles';

function Note({ note }) {
  const [deleteNote] = useMutation(DELETENOTE);

  const handleDelete = () => {
    deleteNote({
      variables: {
        id: note.id,
      },
      update: (cache, { data: { deleteNote } }) => {
        const { notes } = cache.readQuery({ query: GETNOTES });

        cache.writeQuery({
          query: GETNOTES,
          data: {
            notes: notes.filter((n) => n.id !== deleteNote.id)
          },
        });
      }
    });
  };

  const title = {
    __html: sanitizeHtml(note.title)
  };

  const text = {
    __html: sanitizeHtml(note.text)
  };

  return (
    <Card>
      {note.title && (
        <Title dangerouslySetInnerHTML={title} />
      )}
      {note.text && (
        <Text dangerouslySetInnerHTML={text} />
      )}
      <IconButton onClick={handleDelete}>
        <CloseIcon />
      </IconButton>
    </Card>
  );
};

export { Note };
