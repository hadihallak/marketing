import React from 'react';
import {
  Flexbox,
  Box,
  List,
  Text
} from 'radix-ds';

import LivePreview from './LivePreview'

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
          gray400
          mr3
          fs0
          style={{
            width: '320px',
            height: '568px',
            maxHeight: '100%',
            backgroundColor: 'white',
            overflowY: 'hidden'
          }}
        >
          <LivePreview />
        </Box>
        <Box
          border
          gray400
          mr3
          fs0
          style={{
            width: '188px',
            height: '406px',
            maxHeight: '100%',
            backgroundColor: 'white',
            overflowY: 'hidden'
          }}
        >
          <LivePreview />
        </Box>
        <Box
          border
          gray400
          mr3
          fs0
          style={{
            width: '384px',
            minHeight: '512px',
            maxHeight: '100%',
            backgroundColor: 'white',
            overflowY: 'hidden'
          }}
        >
          <LivePreview />
        </Box>
        <Box
          border
          gray400
          mr3
          fs0
          style={{
            width: '640px',
            minHeight: '450px',
            maxHeight: '100%',
            backgroundColor: 'white',
            overflowY: 'hidden'
          }}
        >
          <LivePreview />
        </Box>
      </Flexbox>
    </Box>
  );
}

export default ComposerPreview;
