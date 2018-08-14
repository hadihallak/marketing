import React from 'react'

import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { AspectRatio } from 'radix-ds';
import { Text } from 'radix-ds';

import ComposerToolbelt from './ComposerToolbelt'
import ComposerLayerTree from './ComposerLayerTree'
import ComposerPreview from './ComposerPreview'
import ComposerProperties from './ComposerProperties'

const ComposerScreen = () => (
  <figure
    style={{
      marginTop: '-190px'
    }}
  >
    <AspectRatio>
      <Box
        gray900
        border
        h100
        style={{
          transform: 'perspective(65em) rotateX(30deg)',
          transformOrigin: 'bottom center',
          boxShadow: '0px 62.5px 125px -25px rgba(50,50,93,.5),0px 37.5px 75px -37.5px rgba(0,0,0,.6)',
          borderRadius: '5px',
          borderColor: 'black',
          borderBottomColor: 'hsl(208, 18%, 76%)',
        }}
      >
        <Flexbox
          h100
        >
          <ComposerToolbelt />
          <ComposerLayerTree />
          <ComposerPreview />
          <ComposerProperties />
        </Flexbox>
      </Box>
    </AspectRatio>
  </figure>
)

export default ComposerScreen
