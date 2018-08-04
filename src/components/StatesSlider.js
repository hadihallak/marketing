import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

const StatesSlider = styled.input`
  appearance: none;
  display: block;
  padding: ${Theme.SPACING_100} 0;
  width: 100%;
  cursor: pointer;
  vertical-align: middle;
  background: transparent;
  pointer-events: none;
  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 3px;
    cursor: pointer;
    background-color: ${Theme.GRAY_400};
    border-radius: 9999px;
    border: none;
  }
  &::-webkit-slider-thumb {
    box-shadow: inset 0 0 0 1px ${Theme.GRAY_500};
    border: none;
    height: ${Theme.SPACING_300};
    width: ${Theme.SPACING_300};
    border-radius: 50%;
    background-color: white;
    cursor: pointer;
    appearance: none;
    margin-top: -6px;
    transition: transform 100ms ease;
  }

  ${props => props.hover && css`
    &::-webkit-slider-thumb {
      box-shadow: inset 0 0 0 1px ${Theme.GRAY_600};
    }
  `}

  ${props => props.focused && css`
    outline: none;
    &::-webkit-slider-thumb {
      box-shadow: inset 0 0 0 1px ${Theme.BLUE_500};
    }
  `}
`;

export default StatesSlider;
