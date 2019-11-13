import gql from 'graphql-tag';

const USERNAME = gql`
query Username {
  me {
    username
  }
}
`;

export { USERNAME };
