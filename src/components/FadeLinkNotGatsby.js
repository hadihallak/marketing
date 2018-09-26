import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

const FadeLinkNotGatsby = styled.a`
  align-items: center;
  color: ${Theme.GRAY_600};
  display: inline-flex;
  position: relative;
  text-decoration: none;
  font-size: ${Theme.FONTSIZE_300};

  &::before {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    color: ${Theme.GRAY_900};
    content: attr(data-content);
    transition-property: opacity;
    transition-duration: 80ms;
    transition-timing-function: linear;
  }

  &:hover {
    &::before {
      opacity: 1;
    }
  }
`;

export default FadeLinkNotGatsby
