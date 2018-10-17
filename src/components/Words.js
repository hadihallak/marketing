import React from 'react'
import styled from 'styled-components';

import {
  Flexbox,
  Heading
} from 'radix-ds';

const Words = () => (
  <Flexbox
    height_100
    ai_center
    jc_center
  >
    <Heading
      size6
      style={{
        fontFamily: 'UntitledSans-Medium',
        fontSize: '72px',
      }}
    >
      Spring 2019
    </Heading>
  </Flexbox>
)

export default Words
