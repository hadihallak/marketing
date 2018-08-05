import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';
import { Link } from 'gatsby'

const FadeLink = styled(Link)`
  align-items: center;
  color: ${Theme.GRAY_600};
  display: inline-flex;
  position: relative;
  text-decoration: none;

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

  ${props => props.right && css`
    &::before {
      left: auto;
      right: 0;
    }
  `}

  ${props => props.size1 && css`
    font-size: ${Theme.FONTSIZE_300};
  `}

  ${props => props.size2 && css`
    font-size: ${Theme.FONTSIZE_600};
    letter-spacing: -.012em;
    margin-left: -.075em;
  `}

  ${props => props.blue && css`
    color: ${Theme.BLUE_500};
  `}
`;

export default FadeLink
