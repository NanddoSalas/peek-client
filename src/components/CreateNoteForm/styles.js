import styled from 'styled-components';

const Container = styled.div`
  color: rgb(232, 234, 237);
  background-color: #2D2E30;
  border: 1px solid #5f6368;
  border-radius: 8px;
  box-shadow:rgba(0, 0, 0, 0.6) 0px 1px 2px 0px, rgba(0, 0, 0, 0.3) 0px 2px 6px 2px;
`;

const Forms = styled.div`
  max-height: 600px;
  overflow: auto;

  ${this}::-webkit-scrollbar-track{
    border-radius: 10px;
    background-color: #2D2E30;
  }

  ${this}::-webkit-scrollbar{
    border-radius: 10px;
    width: 12px;
    background-color: #2D2E30;
  }

  ${this}::-webkit-scrollbar-thumb{
    border-radius: 10px;
    background-color: #202124;
  }
`;

const FormFake = styled.div`
  display: ${(props) => props.show ? "none" : "block"};
  padding: 12px 16px;
  font-size: ${(props) => props.size};
  font-weight: 500;
  color: rgb(128, 134, 139);
  position: absolute;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button= styled.div`
  padding: 8px 24px;
  user-select: none;

  color: ${(props) => props.isActive ? "white" : "rgb(128, 134, 139)"};

  ${this}:hover {
    cursor: ${(props) => props.isActive ? "pointer" :  "auto"};
    background-color: ${(props) => props.isActive ? "rgba(154,160,166,0.039)" :  "none"};
  }
`;

const FormStyle = {
  padding: "12px 16px",
  position: "relative",
  outline: "none",
};

const TitleFormStyle = {
  ...FormStyle,
  fontSize: "16px",
  fontWeight: "600",
};

const TextFormStyle = {
  ...FormStyle,
  fontSize: "14px",
};

const TrashIcon = styled.div`
  padding: 8px 24px;
  color: ${(props) => props.isActive ? "white" : "rgb(128, 134, 139)"};

  ${this}:hover {
    cursor: ${(props) => props.isActive ? "pointer" :  "auto"};
    background-color: ${(props) => props.isActive ? "rgba(154,160,166,0.039)" :  "none"};
  }
`;

export { Container, Forms, FormFake, ButtonGroup, Button, TitleFormStyle, TextFormStyle, TrashIcon };
