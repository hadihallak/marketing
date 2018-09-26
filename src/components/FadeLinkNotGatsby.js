import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

const FadeLinkNotGatsby = styled.a`
  align-items: center;
  color: ${Theme.GRAY_600};
  display: inline-flex;
  position: relative;
  text-decoration: none;
  transition: color 70ms linear;

  &:hover {
    color: ${Theme.GRAY_900};
  }
`;

export default FadeLinkNotGatsby
