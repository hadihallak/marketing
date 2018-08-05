import React from 'react';
import {
  Flexbox,
  Box,
  List,
  Text
} from 'radix-ds';

function ComposerProperties() {
  return (
    <Box
      p3
      bl
      bcgray300
      fs0
      style={{
        width: '20%',
      }}
    >
      <Box
        p3
        style={{
          height: '30px',
        }}
      >
        <Flexbox
          ai_center
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
              }}>
              <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
            </svg>
          </Box>
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
              }}>
              <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
              <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
            </svg>
          </Box>
          <Box>
            <Text
              size2
            >
              Button
            </Text>
          </Box>
        </Flexbox>
      </Box>
    </Box>
  );
}

export default ComposerProperties;
