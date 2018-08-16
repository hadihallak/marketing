import React from 'react';
import {
  Flexbox,
  Box,
  List,
  Text
} from 'radix-ds';

function ComposerPreview() {
  return (
    <Box
      p3
      fg1
      style={{
        overflow: 'hidden',
      }}
    >
      <Flexbox
        h100
        ai_flexStart
      >
        <Box
          border
          bcblack
          gray900
          mr2
          fs0
          style={{
            width: '160px',
            height: '284px',
            maxHeight: '100%',
          }}
        >
        </Box>
        <Box
          border
          bcblack
          gray900
          mr2
          fs0
          style={{
            width: '188px',
            height: '406px',
            maxHeight: '100%',
          }}
        >
        </Box>
        <Box
          border
          bcblack
          gray900
          mr2
          fs0
          style={{
            width: '384px',
            minHeight: '512px',
            maxHeight: '100%',
          }}
        >
        </Box>
        <Box
          border
          bcblack
          gray900
          mr2
          fs0
          style={{
            width: '640px',
            minHeight: '450px',
            maxHeight: '100%',
          }}
        >
        </Box>
      </Flexbox>
    </Box>
  );
}

export default ComposerPreview;
