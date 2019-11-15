import styled from 'styled-components';

const Card = styled.div`
  margin: 8px;
  width: 240px;
  background-color: white;
  border: 1px solid darkgray;
  border-radius: 8px;
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

export { Card, Title, Text };
