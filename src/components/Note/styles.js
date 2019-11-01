import styled from 'styled-components';

const Card = styled.div`
  margin: 8px;
  width: 240px;
  color: rgb(232, 234, 237);
  background-color: #2D2E30;
  border: 1px solid #5f6368;
  border-radius: 8px;
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

export { Card, Title, Text };
