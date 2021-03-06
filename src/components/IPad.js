import React from 'react'

import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';

function IPad(props) {
  return (
    <Box
      fs_0
      border
      p4
      bcgray400
      style={{
        borderRadius: '30px'
      }}
    >
      <Flexbox
        jc_center
        mb_3
      >
        <Box
          border
          bcgray400
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
          bcgray400
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
          bcgray400
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
        height_100
        border
        relative
        style={{
          width: '765px',
          height: '1024px',
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
          bcgray400
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

export default IPad
