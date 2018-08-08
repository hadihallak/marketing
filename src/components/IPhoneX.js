import React from 'react'

import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';

function IPhoneX(props) {
  return (
    <Box
      fs0
      bcgray400
      black
      style={{
        borderWidth: '3px',
        borderStyle: 'solid',
        borderRadius: '30px',
        backgroundColor: 'black',
        padding: '10px',
        overflow: 'hidden'
      }}
    >
      <Box
        white
        relative
        style={{
          width: '188px',
          height: '406px',
          borderRadius: '15px',
          overflow: 'hidden'
        }}
      >
        {props.children}
      </Box>
    </Box>
  );
}

export default IPhoneX
