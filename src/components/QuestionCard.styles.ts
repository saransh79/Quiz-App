import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 400px;
  padding: 20px;
  text-align: center;

  p {
    text-align: left;
    color: #fff;
    font-size: 20px;
  }
`;

type ButtonWrapperProps = {
  correct: boolean;
  userClicked: boolean;
};

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 20px;
    width: 360px;
    padding: 10px 0;
    margin: 15px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? '#198754'
        : !correct && userClicked
        ? '#ff0000'
        : 'transparent'};
    border: 1px solid #ffffff;
    border-radius: 10px;
    color: #fff;

  }
`;
