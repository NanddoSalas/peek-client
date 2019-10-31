import styled from 'styled-components';

const Head = styled.div`
  width: 100vw;
  height: 64px;
  background-color: #202124;
  display: flex;
  box-shadow: inset 0 -1px 0 0 #5f6368;
`;

const Logo = styled.div`
  font-size: 32px;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const TextLogo = styled.span`
  margin-left: 10px;
`;

export { Head, Logo, TextLogo };
