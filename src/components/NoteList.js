import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GETNOTES } from '../graphql/querys';

import Masonry from 'react-masonry-component';
import { Note } from './Note';

function NoteList() {
  const { data } = useQuery(GETNOTES);
  return (
    <Masonry>
      {data ? data.notes.map((note) => (
        <Note
          note={note}
          key={note.id}
        />
      )) : null}
    </Masonry>
  );
}

export { NoteList };
