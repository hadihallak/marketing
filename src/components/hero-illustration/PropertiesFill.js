import React from 'react';
import {
  Flexbox,
  Box,
  Heading,
  GhostButton,
  Input
} from 'radix-ds';

function PropertiesFill() {
  return (
    <Box
      p2
      bt
      bcgray300
    >
      <Heading
        size1
        gray600
        mb2
      >
        Fill
      </Heading>
      <Flexbox mt2 ai_center style={{marginRight: '-5px'}}>
      <Box pr2>
        <Box size1 gray600 style={{width: '25px',height: '25px',borderRadius: '3px',boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.05)',backgroundColor: 'hsl(208,99%,99%)'}}></Box>
      </Box>
      <Box fg1 pr2>
        <Input value="Blue 100" readOnly />
      </Box>
      <Flexbox
        ai_center
      >
        <Box>
          <GhostButton size1>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7.5 12.5C4.5 12.5 2 10.5 0.5 7.50002C2 4.5 4.5 2.5 7.5 2.5C10.5 2.5 13 4.5 14.5 7.50001C13 10.5 10.5 12.5 7.5 12.5Z" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="7.5" cy="7.5" r="2"/>
            </svg>
          </GhostButton>
        </Box>
        <GhostButton size1>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            stroke="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="4.5" y="4.5" width="6" height="8" rx="0.5" strokeLinecap="round" strokeLinejoin="bevel"/>
            <path d="M3.5 4.5H11.5" strokeLinecap="round"/>
            <path d="M5.5 2.5H9.5" strokeLinecap="round"/>
          </svg>
        </GhostButton>
      </Flexbox>
    </Flexbox>
    </Box>
  );
}

export default PropertiesFill;
