import React from 'react';
import sanitizeHtml from 'sanitize-html';
import { Card, Title, Text } from './styles';

function Note({ data }) {
  const title = { 
    __html: sanitizeHtml(data.title)
  };

  const text = { 
    __html: sanitizeHtml(data.text)
  };

  return (
    <Card>
      {data.title && (
        <Title dangerouslySetInnerHTML={title} />
      )}
      {data.text && (
        <Text dangerouslySetInnerHTML={text} />
      )}
    </Card>
  );
};

export { Note };
