import styled from '@emotion/styled';

export const Button = styled.button(
  `
    cursor:pointer;
    padding: 10px;
    & a {
        text-decoration:none;
        color:#fff;
    }
    font-size: 14px;
    border-radius: 30px;
    border : none;
    color: black;
    background-color: #dee2e6;
    font-weight: normal;
    &:hover {
        opacity:.8
    }
    margin : 10px 0;
  `
);

export const ColoredButton = styled(Button)`
  background-color: ${(props) => (props.primary ? '#198754' : '#fd7e14')};
  color: #fff;
`;
