import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

const StatesInput = styled.input`
  appearance: none;
  background-color: white;
  border: none;
  border-radius: ${Theme.BORDERRADIUS_100};
  box-shadow: inset 0 0 0 1px ${Theme.GRAY_400};
  box-sizing: border-box;
  color: ${Theme.GRAY_900};
  font-family: inherit;
  font-size: ${Theme.FONTSIZE_300};
  height: ${Theme.SPACING_600};
  line-height: ${Theme.SPACING_600};
  padding: 0 ${Theme.SPACING_200};
  user-select: none;
  pointer-events: none;
  width: 100%;

  &::-webkit-input-placeholder {
    color: ${Theme.GRAY_500};
    opacity:  1;
  }
  &::-moz-placeholder {
    color: ${Theme.GRAY_500};
    opacity:  1;
  }
  &:-ms-input-placeholder {
    color: ${Theme.GRAY_500};
    opacity:  1;
  }

  ${props => props.hover && css`
    box-shadow: inset 0 0 0 1px ${Theme.GRAY_500};
  `}

  ${props => props.focused && css`
    box-shadow: inset 0 0 0 1px ${Theme.BLUE_500}, inset 0 1px 3px hsla(208,30%,10%,.16);
  `}

  ${props => props.disabled && css`
    background-color: ${Theme.GRAY_200};
    box-shadow: inset 0 0 0 1px ${Theme.GRAY_400};
  `}
`;

export default StatesInput;
