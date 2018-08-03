import React from 'react'

import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';

function IPhoneSE(props) {
  return (
    <Box
      fs0
      border
      p4
      bcgray300
      style={{
        borderRadius: '30px'
      }}
    >
      <Flexbox
        jc_center
        mb3
      >
        <Box
          border
          bcgray300
          style={{
            width: '15px',
            height: '15px',
            borderRadius: '50%',
          }}
        >
        </Box>
      </Flexbox>
      <Flexbox
        jc_center
        mb4
      >
        <Box
          border
          bcgray300
          mr2
          style={{
            width: '5px',
            height: '5px',
            borderRadius: '50%',
          }}
        >
        </Box>
        <Box
          border
          bcgray300
          style={{
            width: '100px',
            height: '5px',
            borderRadius: '9999px',
          }}
        >
        </Box>
      </Flexbox>
      <Box
        mb4
        h100
        border
        relative
        style={{
          width: '320px',
          height: '568px',
          border: '2px solid black',
          borderRadius: '3px',
        }}
      >
        {props.children}
      </Box>
      <Flexbox
        jc_center
      >
        <Box
          border
          bcgray300
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
          }}
        >
        </Box>
      </Flexbox>
    </Box>
  );
}

export default IPhoneSE
