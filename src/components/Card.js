import styled from 'styled-components';
import {
  Theme,
} from 'radix-ds';

const Card = styled.a`
  display: block;
  border: 1px solid ${Theme.GRAY_400};
  border-radius: ${Theme.BORDERRADIUS_100};
  text-decoration: none;
  outline: none;
  padding: ${Theme.SPACING_400};
  height: 100%;
  transition: border-color 70ms linear;
  width: 260px;
  color: inherit;

  &:hover {
    border-color: ${Theme.GRAY_500};
  }

  &:focus {
    border-color: ${Theme.BLUE_500};
  }

  @media screen and (min-width: ${Theme.BREAKPOINT_200}) {
    width: auto;
  }
`;

export default Card;
