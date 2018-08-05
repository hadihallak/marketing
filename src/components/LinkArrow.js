import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

import { Box } from 'radix-ds';
import FadeLink from './FadeLink'

const LinkArrow = styled(Box)`
  position: relative;
  transition-property: transform;
  transition-duration: 600ms;
  transition-timing-function: cubic-bezier(0,1,0,1);
  will-change: transform;

  svg:last-child {
    position: absolute;
    top: 0;
    left: 0;
    color: ${Theme.GRAY_900};
    content: attr(data-content);
    opacity: 0;
    transition-property: opacity;
    transition-duration: 80ms;
    transition-timing-function: linear;
  }

  ${FadeLink}:hover & {
    transform: translateX(${Theme.SPACING_100});

    svg:last-child {
      opacity: 1;
    }
  }

  ${props => props.left && css`
    ${FadeLink}:hover & {
      transform: translateX(-${Theme.SPACING_100});
    }
  `}
`;

export default LinkArrow
