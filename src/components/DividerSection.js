import React from 'react'

import {
  Section,
  Divider,
  Flexbox
} from 'radix-ds';

const DividerSection = (props) => (
  <Section>
    <Flexbox jc_center>
      <Divider size3 />
    </Flexbox>
  </Section>
)

export default DividerSection
