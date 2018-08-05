import React from 'react';
import {
  Flexbox,
  Box,
  List,
  Text
} from 'radix-ds';

function ComposerToolbelt() {
  return (
    <Box
      br
      bcgray300
      fs0
      pl1
      pr1
      style={{
        width: '35px',
      }}
    >
      <Box>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: 'block'
          }}
        >
          <rect x="0.5" y="0.5" width="14" height="14" rx="1.5" transform="translate(5 5)" stroke="black"/>
        </svg>
      </Box>
      <Box>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: 'block'
          }}
        >
          <path d="M0 0H14" transform="translate(5.5 12.5)" stroke-linecap="round"/>
          <path d="M0 14V0" transform="translate(12.5 5.5)" stroke-linecap="round"/>
        </svg>
      </Box>
      <Box>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: 'block'
          }}
        >
          <path d="M0 0H14" transform="translate(5.5 12.5)" stroke-linecap="round"/>
          <path d="M0 14V0" transform="translate(12.5 5.5)" stroke-linecap="round"/>
        </svg>
      </Box>
      <Box>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            display: 'block'
          }}
        >
          <path d="M0 0H14" transform="translate(5.5 12.5)" stroke-linecap="round"/>
          <path d="M0 14V0" transform="translate(12.5 5.5)" stroke-linecap="round"/>
        </svg>
      </Box>
    </Box>
  );
}

export default ComposerToolbelt;
