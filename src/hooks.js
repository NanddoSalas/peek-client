import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { LOGOUT, UPDATENOTE } from './graphql/mutations';

const useLogout = () => {
  const [Logout, { client }] = useMutation(LOGOUT);

  const logout = async () => {
    await Logout();
    client.resetStore();
  };

  return logout;
}

const useUpdateNote = (initialValue) => {
  const [currentNote, setCurrentNote] = useState(initialValue);
  const [modifiedNote, setModifiedNote] = useState(initialValue);

  const [updateNote] = useMutation(UPDATENOTE);

  const setNote = (note) => {
    setCurrentNote(note);
    setModifiedNote(note);
  };

  const handleChange = (key, value) => {
    setModifiedNote({
      ...modifiedNote,
      [key]: value,
    });
  };

  const performUpdate = async () => {
    if (currentNote.title !== modifiedNote.title || currentNote.text !== modifiedNote.text) {
      await updateNote({
        variables: modifiedNote,
      });
    }
  }

  return {
    currentNote,
    modifiedNote,
    setNote,
    handleChange,
    performUpdate,
  };
};

export { useLogout, useUpdateNote };
