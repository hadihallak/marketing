import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

const StatesButton = styled.button`
  align-items: center;
  appearance: none;
  background-color: ${Theme.GRAY_100};
  box-shadow: inset 0 0 0 1px ${Theme.GRAY_400};
  border: none;
  border-radius: ${Theme.BORDERRADIUS_100};
  color: ${Theme.GRAY_600};
  cursor: pointer;
  display: inline-flex;
  flex-shrink: 0;
  width: 100%;
  font-family: 'UntitledSans',apple-system,BlinkMacSystemFont,'Helvetica Neue',arial,sans-serif;
  font-size: ${Theme.FONTSIZE_300};
  font-weight: 400;
  height: ${Theme.SPACING_600};
  justify-content: center;
  line-height: 1;
  min-width: ${Theme.SPACING_600};
  outline: none;
  padding: 0 ${Theme.SPACING_300};
  pointer-events: none;
  position: relative;
  text-align: center;
  text-decoration: none;
  user-select: none;
  white-space: nowrap;

  ${props => props.blue && css`
    background-color: ${Theme.BLUE_100};
    box-shadow: inset 0 0 0 1px ${Theme.BLUE_300};
    color: ${Theme.BLUE_600};
  `}

  ${props => props.green && css`
    background-color: ${Theme.GREEN_100};
    box-shadow: inset 0 0 0 1px ${Theme.GREEN_300};
    color: ${Theme.GREEN_600};
  `}

  ${props => props.hover && css`
    box-shadow: inset 0 0 0 1px ${Theme.GRAY_500}, 0 5px 15px hsla(208,30%,10%,.05);
  `}

  ${props => props.greenhover && css`
    box-shadow: inset 0 0 0 1px ${Theme.GREEN_400}, 0 5px 15px hsla(208,30%,10%,.05);
  `}

  ${props => props.bluehover && css`
    box-shadow: inset 0 0 0 1px ${Theme.BLUE_400}, 0 5px 15px hsla(208,30%,10%,.05);
  `}

  ${props => props.focused && css`
    &::before {
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
    color: ${Theme.GRAY_500};
  `}
`;

export default StatesButton;
