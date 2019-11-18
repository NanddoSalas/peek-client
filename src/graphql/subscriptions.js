import gql from 'graphql-tag';

const NOTES_SUBSCRIPTION = gql`
subscription onNoteAdded {
  noteAdded {
    id
    title
    text
  }
}
`;

const NOTE_UPDATED = gql`
subscription onNoteUpdated{
  noteUpdated {
    id
    title
    text
  }
}
`;

const NOTE_DELETED = gql`
subscription onNoteDeleted{
   noteDeleted{
    id
  }
}
`;

export { NOTES_SUBSCRIPTION, NOTE_UPDATED, NOTE_DELETED };
