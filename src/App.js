import React from 'react';
import GlobalStyles from './GlobalStyles';

import { Header } from './components/Header/index';
import { CreateNoteFormContainer, NotesConatainer } from './AppStyle';
import { CreateNoteForm } from './components/CreateNoteForm/index';
import { Note } from './components/Note/index';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
    };
  }
  
  handleSave = (title, text, uuid) => {
    const { notes } = this.state;
    notes.push({ title, text, uuid });
    this.setState({ notes }); 
  }

  render() {
    return (
      <React.Fragment>
        <GlobalStyles />
        <Header/>

        <CreateNoteFormContainer>
          <CreateNoteForm onSave={this.handleSave} />
        </CreateNoteFormContainer>

        <NotesConatainer>
          {this.state.notes.map((note) => {
            return <Note key={note.uuid} data={note} />
          })}
        </NotesConatainer>

      </React.Fragment>
    );
  }
}

export default App;
