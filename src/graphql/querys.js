import gql from 'graphql-tag';

const NAME = gql`
  query Name {
    me {
      name
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

export { GETNOTES, NAME };
