import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

import BlogCard from './BlogCard';

const Resources = () => (
  <Section
    size3
  >
    <Container
      size2
    >
      <Box>
        <Heading
          size4
          mb8
        >
         Further reading on what we are building
        </Heading>
      </Box>
      <Flexbox column bp3_row>
        <Box bp3_fg1 bp3_fb0 mb4 bp3_mb0 bp3_ml4>
          <BlogCard
            heading="Help us Kickstart Modulz"
            blurb="Modulz is a new design tool which exports to production code rather than static images."
            url="https://www.medium.com"
          />
        </Box>
        <Box bp3_fg1 bp3_fb0 mb4 bp3_mb0 bp3_ml4>
          <BlogCard
            heading="The design tool dilemma"
            blurb="A detailed look at two opposing narratives emerging in the design tool space."
            url="https://www.medium.com"
          />
        </Box>
        <Box bp3_fg1 bp3_fb0 mb4 bp3_mb0 bp3_ml4>
          <BlogCard
            heading="Design tools are running out of track"
            blurb="A close look at where design tools are missing the mark."
            url="https://www.medium.com"
          />
        </Box>
        <Box bp3_fg1 bp3_fb0 mb4 bp3_mb0 bp3_ml4>
          <BlogCard
            heading="How to construct a design system"
            blurb="Tips for designing and building a consistent design system."
            url="https://www.medium.com"
          />
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default Resources
