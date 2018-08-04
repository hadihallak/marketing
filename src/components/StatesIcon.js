import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

const StatesIcon = styled.button`
  align-items: center;
  appearance: none;
  background-color: transparent;
  border: none;
  color: ${Theme.GRAY_600};
  display: inline-flex;
  flex-shrink: 0;
  height: ${Theme.SPACING_600};
  justify-content: center;
  line-height: 1;
  min-width: ${Theme.SPACING_600};
  outline: none;
  padding: 0;
  pointer-events: none;
  user-select: none;

  ${props => props.hover && css`
    color: ${Theme.GRAY_900};
  `}

  ${props => props.focused && css`
    color: ${Theme.BLUE_500};
  `}

  ${props => props.disabled && css`
    color: ${Theme.GRAY_500};
  `}
`;

export default StatesIcon;
