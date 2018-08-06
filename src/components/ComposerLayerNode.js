import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';
import {
  ListItem
} from 'radix-ds';

const Layer = styled(ListItem)`
  min-height: 29px;
  cursor: default;
  user-select: none;

  &:nth-child(odd) {
    background-color: hsl(208,30%,98.25%);
  }

  &:hover {
    background-color: ${Theme.GRAY_200};
  }

  ${props => props.level2 && css`
    padding-left: 35px;
  `}
`;

export default Layer;
