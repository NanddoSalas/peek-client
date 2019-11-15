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

const DELETENOTE = gql`
mutation DeleteNote($id: ID!) {
  deleteNote(id: $id) {
    id
  }
}
`;

export { LOGOUT, CREATENOTE, DELETENOTE };
