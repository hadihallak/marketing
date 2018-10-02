import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

const FadeLinkNotGatsby = styled.a`
  align-items: center;
  color: ${Theme.GRAY_600};
  display: inline-flex;
  position: relative;
  text-decoration: none;
  transition: color 70ms linear;
  outline: none;

  &:hover {
    color: ${Theme.GRAY_900};
  }

  &:focus {
    color: ${Theme.BLUE_500};
    outline: 1px solid ${Theme.BLUE_500};
    outline-offset: 8px;
  }
`;

export default FadeLinkNotGatsby
