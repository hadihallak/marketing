import React from 'react'
import { Link } from 'gatsby'

import {
  Section,
  Container,
  Box,
  Flexbox,
  Heading,
  Text,
  Divider
} from 'radix-ds';

import BlogCard from './BlogCard';

const Resources = () => (
  <Section
    size3
  >
    <Container
      size2
    >
      <Heading
        size4
        bold
        style={{marginBottom: '15px'}}
      >
        Blog
      </Heading>
      <Heading
        size3
        gray600
        mb8
      >
       More about what we're doing.
      </Heading>
      <Flexbox column bp2_row bp2_nml4>
        <Box bp2_fg1 bp2_fb0 mb4 bp2_mb0 bp2_ml4>
          <BlogCard
            heading="Help us Kickstart Modulz"
            blurb="Who we are, what we're building and how you can support us."
            url="https://www.medium.com"
            date="Oct '18"
          />
        </Box>
        <Box bp2_fg1 bp2_fb0 mb4 bp2_mb0 bp2_ml4>
          <BlogCard
            heading="The design tool dilemma"
            blurb="A detailed look at two opposing narratives emerging in the design tool space."
            url="https://medium.freecodecamp.org/the-design-tool-dilemma-225541c4ad1d"
            date="Jul '18"
          />
        </Box>
        <Box bp2_fg1 bp2_fb0 mb4 bp2_mb0 bp2_ml4>
          <BlogCard
            heading="Design tools are running out of track"
            blurb="A close look at where design tools are missing the mark."
            url="https://medium.freecodecamp.org/design-tools-are-running-out-of-track-94f21b6ae939"
            date="Sep '17"
          />
        </Box>
        <Box bp2_fg1 bp2_fb0 mb4 bp2_mb0 bp2_ml4>
          <BlogCard
            heading="How to construct a design system"
            blurb="Tips for designing and building a consistent design system."
            url="https://medium.freecodecamp.org/how-to-construct-a-design-system-864adbf2a117"
            date="Feb '17"
          />
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default Resources
