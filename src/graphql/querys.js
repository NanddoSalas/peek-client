import gql from 'graphql-tag';

const USERNAME = gql`
query Username {
  me {
    username
  }
}
`;

const GETNOTES = gql`
query GetNotes {
  notes: getNotes {
    id
    title
    text
  }
}
`;

export { USERNAME, GETNOTES };
