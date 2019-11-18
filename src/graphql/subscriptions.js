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

export { NOTES_SUBSCRIPTION };
