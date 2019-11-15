import styled from 'styled-components';

import IconBtn from '@material-ui/core/IconButton';

const Card = styled.div`
  margin: 8px;
  width: 240px;
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 8px;
  ${this}:hover {
    button {
      opacity: 1;
    }
  }
  @media screen and (max-width: 542px) {
    width: 100%;
  }
`;

const Title = styled.div`
  padding: 12px 16px;
  font-size: 18px;
  font-weight: 600;
`;

const Text = styled.div`
  padding: 12px 16px;
  font-size: 16px;
`;

const IconButton = styled(IconBtn)`
  position: absolute !important;
  top: 0;
  right: 0;
  opacity: 0;
  transition: opacity 0.3s !important;
`;

export { Card, Title, Text, IconButton };
