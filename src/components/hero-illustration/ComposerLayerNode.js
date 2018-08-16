import React from 'react'
import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';
import {
  Box,
  Text
} from 'radix-ds';

const LayerNode = styled.div`
  height: 31px;
  display: flex;
  align-items: center;
  cursor: default;
  user-select: none;
  background-color: hsl(208,18%,13%);
  padding: 0 10px;

  &:nth-child(odd) {
    background-color: hsl(208,18%,15%);
  }

  &:hover {
    background-color: ${Theme.GRAY_200};
  }

  ${props => props.level2 && css`
    padding-left: 35px;
  `}
`;

const Layer = (props) => (
  <LayerNode>
    <Box
      mr2
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 15 15"
        fill="none"
        stroke="white"
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
        gray600
      >
        {props.label}
      </Text>
    </Box>
  </LayerNode>
)

export default Layer;
