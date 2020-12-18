import styled from 'styled-components';
import { variant } from 'styled-system';

interface IButton {
  variant: 'primary' | 'outline';
}

const Button = styled.button<IButton>`
  ${variant({
    variants: {
      primary: {
        color: 'black',
        bg: 'blue',
      },
      outline: {
        color: 'black',
        bg: 'transparent',
        border: '1px solid',
        borderColor: 'blue',
      },
    },
  })}
`;

export default Button;
