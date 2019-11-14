import styled from 'styled-components';

const Container = styled.div`
  color: rgb(232, 234, 237);
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgba(60,64,67,0.302), 0 2px 6px 2px rgba(60,64,67,0.149);
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

const Button = styled.div`
  padding: 8px 24px;
  user-select: none;

  color: ${(props) => props.isActive ? "black" : "rgb(128, 134, 139)"};

  ${this}:hover {
    cursor: ${(props) => props.isActive ? "pointer" : "auto"};
    background-color: ${(props) => props.isActive ? "rgba(154,160,166,0.039)" : "none"};
  }
`;

const FormStyle = {
  padding: "12px 16px",
  position: "relative",
  outline: "none",
  color: "black",
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
  color: ${(props) => props.isActive ? "black" : "rgb(128, 134, 139)"};

  ${this}:hover {
    cursor: ${(props) => props.isActive ? "pointer" : "auto"};
    background-color: ${(props) => props.isActive ? "rgba(154,160,166,0.039)" : "none"};
  }
`;

export { Container, Forms, FormFake, ButtonGroup, Button, TitleFormStyle, TextFormStyle, TrashIcon };
