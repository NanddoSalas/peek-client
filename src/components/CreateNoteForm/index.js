import React from 'react';
import sanitizeHtml from 'sanitize-html';

import { Container, Forms, FormFake, ButtonGroup, Button, TitleFormStyle, TextFormStyle, TrashIcon } from './styles';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentEditable from "react-contenteditable";


class CreateNoteForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      text: '',
    };
  };

  handleChangeTitle = ({ target }) => this.setState({ title: target.value });

  handleChangeText = ({ target }) => this.setState({ text: target.value });

  handleTrashClick = () => this.setState({
    title: '',
    text: '',
  });

  handleSaveClick = () => {
    const { title, text } = this.state;

    if (title || text) {
      this.props.onSave(
        sanitizeHtml(title), 
        sanitizeHtml(text),
      );
    };
    
    this.setState({
      title: '',
      text: '',
    });
  }

  render() {
    return (
      <Container>
        <Forms>
          <FormFake
            show={this.state.title}
            size="16px"
          >Title</FormFake>
          <ContentEditable
            style={TitleFormStyle}
            html={this.state.title}
            onChange={this.handleChangeTitle}
          />

          <FormFake
            show={this.state.text}
            size="14px"
          >Create note...</FormFake>
          <ContentEditable
            style={TextFormStyle}
            html={this.state.text}
            onChange={this.handleChangeText}
          />
        </Forms>

        <ButtonGroup hide={this.state.show}>

          <TrashIcon
            onClick={this.handleTrashClick}
            isActive={this.state.title || this.state.text}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </TrashIcon>

          <Button
            isActive={this.state.title || this.state.text}
            onClick={this.handleSaveClick}
          >Save</Button>
          
        </ButtonGroup>
      </Container>
    );
  }
}

export { CreateNoteForm };
