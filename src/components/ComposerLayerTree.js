import React from 'react';
import {
  Box,
  List,
  Text
} from 'radix-ds';

import Layer from './ComposerLayerNode'

function ComposerLayerTree() {
  return (
    <Box
      br
      bcgray300
      fs0
      style={{
        width: '20%',
      }}
    >
      <List
        size1
      >
        <Layer>
          <Box
            mr6
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
              gray600
            >
              Search
            </Text>
          </Box>
        </Layer>
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
              <path d="M0 0L4 4L0 8" transform="translate(5.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
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
        <Layer
          level2
        >
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
              <path d="M0 0L4 4L0 8" transform="translate(5.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
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
      </List>
    </Box>
  );
}

export default ComposerLayerTree;
