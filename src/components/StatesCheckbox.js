import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

const StatesCheckbox = styled.div`
  background-color: white;
  box-shadow: inset 0 0 0 1px ${Theme.GRAY_400};
  border-radius: ${Theme.BORDERRADIUS_100};
  flex-shrink: 0;
  width: ${Theme.SPACING_400};
  height: ${Theme.SPACING_400};
  position: relative;
  user-select: none;

  &::before {
    position: absolute;
    background-color: ${Theme.BLUE_500};
    top: 50%;
    left: 50%;
    margin-top: -5px;
    margin-left: -5px;
    content: "";
    width: ${Theme.SPACING_200};
    height: ${Theme.SPACING_200};
  }

  ${props => props.hover && css`
    box-shadow: inset 0 0 0 1px ${Theme.GRAY_500};
  `}

  ${props => props.focused && css`
    &::after {
      position: absolute;
      top: -2px;
      left: -2px;
      content: "";
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      box-shadow: 0 0 0 2px ${Theme.BLUE_500};
      border-radius: ${Theme.BORDERRADIUS_100};
    }
  `}

  ${props => props.disabled && css`
    background-color: ${Theme.GRAY_200};
    box-shadow: inset 0 0 0 1px ${Theme.GRAY_400};
    &::before {
      background-color: ${Theme.GRAY_400};
    }
  `}
`;

export default StatesCheckbox;
