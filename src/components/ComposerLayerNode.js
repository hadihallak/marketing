import React from 'react';
import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';
import {
  Flexbox,
  Box,
  Text,
  List,
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

  ${props => props.component && css`
    background-color: ${Theme.RED_500};
  `}
`;

function ComposerLayerNode() {
  return (
    <Layer>
      <Box
        mr1
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: 'block'
          }}
        >
          <path d="M0 0L4 4L0 8" transform="translate(5.5 3.5)" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </Box>
      <Box
        mr2
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          stroke="currentColor"
          style={{
            display: 'block'
          }}
        >
          <rect x="0.5" y="0.5" width="10" height="10" rx="1.5" transform="translate(2 2)"/>
        </svg>
      </Box>
      <Box>
        <Text
          size1
        >
          Button
        </Text>
      </Box>
    </Layer>
  );
}

export default ComposerLayerNode;
