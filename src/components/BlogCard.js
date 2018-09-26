import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

import {
  Box,
  Heading,
  Text,
  Theme
} from 'radix-ds';

const Card = styled.a`
  display: block;
  border: 1px solid ${Theme.GRAY_400};
  text-decoration: none;
  padding: ${Theme.SPACING_400};
  height: 100%

  &:hover {
    border-color: ${Theme.GRAY_500};
  }
`;

const BlogCard = (props) => (
  <Card
    href={props.url}
    target="_blank"
  >
    <Heading
      size2
      lh2
      mb1
      style={{fontFamily: '"UntitledSans-Medium"', fontSize: '19px'}}
    >
      {props.heading}
    </Heading>
    <Text
      size2
      lh2
      gray600
    >
      {props.blurb}
    </Text>

  </Card>
);

export default BlogCard;
