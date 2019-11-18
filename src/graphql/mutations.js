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

const UPDATENOTE = gql`
mutation UpdateNote($id: ID!, $title: String!, $text: String!) {
  updatedNote: updateNote(id: $id, title: $title, text: $text) {
    id
    title
    text
  }
}
`;

export { LOGOUT, CREATENOTE, DELETENOTE, UPDATENOTE };
