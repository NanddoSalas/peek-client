import gql from 'graphql-tag';

const LOGOUT = gql`
mutation Logout {
  logout
}
`;

const CREATENOTE = gql`
mutation CreateNote($title: String, $text: String) {
  createNote(title: $title, text: $text) {
    id
    title
    text
  }
}
`;

export { LOGOUT, CREATENOTE };
