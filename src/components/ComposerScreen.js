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
  <AspectRatio>
    <Box
      gray100
      border
      h100
      bcgray400
      style={{
        transform: 'perspective(65em) rotateX(30deg)',
        transformOrigin: 'bottom center',
        boxShadow: 'rgba(16, 23, 30, 0.05) -70px 58px 60px 0px, rgba(16, 23, 30, 0.05) 0px 80px 190px 0px',
        borderRadius: '5px',
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
)

export default ComposerScreen
