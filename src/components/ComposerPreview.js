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
        overflow: 'hidden'
      }}
    >
      <Flexbox
        h100
        ai_flexStart
      >
        <Box
          border
          bcgray300
          white
          mr2
          fs0
          style={{
            width: '320px',
            minHeight: '568px',
            maxHeight: '100%',
          }}
        >
        </Box>
        <Box
          border
          bcgray300
          white
          mr2
          fs0
          style={{
            width: '375px',
            minHeight: '667px',
            maxHeight: '100%',
          }}
        >
        </Box>
        <Box
          border
          bcgray300
          white
          mr2
          fs0
          style={{
            width: '375px',
            minHeight: '812px',
            maxHeight: '100%',
          }}
        >
        </Box>
      </Flexbox>
    </Box>
  );
}

export default ComposerPreview;
