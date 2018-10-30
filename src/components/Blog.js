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

const Blog = () => (
  <Section
    size2
    bp1_size3
  >
    <Container
      bp2_size2
    >
      <Heading
        size5
        lh_3
        bold
        mb_3
        as="h5"
        ta_center
      >
        Blog
      </Heading>
      <Text
        size5
        lh_3
        color_gray600
        mb_6
        bp1_mb_7
        ta_center
      >
       More about what we're doing.
      </Text>
      <Box pl_5 pr_5 bp2_pl_0 bp2_pr_0 ox_scroll bp2_ox_visible style={{display: 'inlineBlock', WebkitOverflowScrolling: 'touch'}}>
        <Flexbox nml_4>
          <Box bp2_fg_1 bp2_fb_0 bp2_mb_0 ml_4>
            <BlogCard
              heading="Help us Kickstart Modulz"
              blurb="Who we are, what we're building and how you can support us."
              url="https://medium.freecodecamp.org/help-us-kickstart-modulz-5751775ed435"
              date="Oct '18"
            />
          </Box>
          <Box bp2_fg_1 bp2_fb_0 bp2_mb_0 ml_4>
            <BlogCard
              heading="The design tool dilemma"
              blurb="An outline of two opposing narratives emerging in the design tool space."
              url="https://medium.freecodecamp.org/the-design-tool-dilemma-225541c4ad1d"
              date="Jul '18"
            />
          </Box>
          <Box bp2_fg_1 bp2_fb_0 bp2_mb_0 ml_4>
            <BlogCard
              heading="Design tools are running out of track"
              blurb="A detailed look at what is most lacking in our current crop of design tools and how we might improve our workflows."
              url="https://medium.freecodecamp.org/design-tools-are-running-out-of-track-94f21b6ae939"
              date="Sep '17"
            />
          </Box>
          <Box bp2_fg_1 bp2_fb_0 bp2_mb_0 ml_4>
            <BlogCard
              heading="How to construct a design system"
              blurb="Tips for designing and building a consistent design system."
              url="https://medium.freecodecamp.org/how-to-construct-a-design-system-864adbf2a117"
              date="Feb '17"
            />
          </Box>
        </Flexbox>
      </Box>
    </Container>
  </Section>
)

export default Blog
