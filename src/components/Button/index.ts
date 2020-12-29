import styled, { css } from 'styled-components';

interface IButton {
  variant?: 'primary' | 'outline' | undefined;
}

const Button = styled.button<IButton>`
  ${({ theme, ...props }) => {
    switch (props.variant) {
      case 'primary':
        return css`
          color: ${theme['color-black']};
          background: ${theme['color-blue']};
        `;
      case 'outline':
        return css`
          color: ${theme['color-black']};
          background: ${theme['color-red']};
        `;
      default:
        return css`
          color: ${theme['color-black']};
          background: ${theme['color-green']};
        `;
    }
  }}
`;

export default Button;
