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
        borderWidth: '1px',
        padding: '4px',
        borderStyle: 'solid',
        borderRadius: '30px',
        overflow: 'hidden',
        // transform: 'perspective(1000px) rotateY(20deg)'
      }}
    >
      <Box
        fs0
        black
        style={{
          borderRadius: '24px',
          backgroundColor: 'black',
          padding: '8px',
          overflow: 'hidden'
        }}
      >
        <Box
          white
          relative
          style={{
            width: '281px',
            height: '609px',
            borderRadius: '15px',
            overflow: 'hidden'
          }}
        >
          {props.children}
        </Box>
      </Box>
    </Box>
  );
}

export default IPhoneX
