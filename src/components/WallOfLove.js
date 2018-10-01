import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

import SmallTestimonial from './SmallTestimonial'
import LargeTestimonial from './LargeTestimonial'

const WallOfLove = () => (
  <Section
    size2
    bp1_size3
  >
    <Container
      size2
    >
      <Flexbox fd_column bp1_fd_row mb_7>
        <Box fg_1 fb_0 mb_6 bp1_mb_0 bp1_mr_2 bp2_mr_8>
          <SmallTestimonial
            quote='"Modulz is one of the most exciting design tools I’ve seen. This could revolutionize design workflows."'
            author="Michael Dick"
            initial="M"
            url="htts://www.twitter.com/modulz"
          />
        </Box>
        <Box fg_1 fb_0 bp1_ml_8>
          <SmallTestimonial
            quote='"With all of these new UI design tools coming out, I think Modulz by looks the most promising. Really excited to give this one a try."'
            author="Steve Schoger"
            initial="S"
            url="https://twitter.com/steveschoger/status/1003680891531616256"
          />
        </Box>
      </Flexbox>
    </Container>
    <Container
      size3
    >
      <LargeTestimonial
        quote='"It’s exciting to watch a small group of people working on an idea which will fundamentally change a discipline."'
        author="Tony Ennis"
        initial="T"
        url="https://twitter.com/tonyennis/status/960067570987556864"
      />
    </Container>
    <Container
      size2
    >
      <Flexbox fd_column bp1_fd_row mt_7>
        <Box fg_1 fb_0 mb_6 bp1_mb_0 bp1_mr_2 bp2_mr_8>
          <SmallTestimonial
            quote='"This is one of those things, that upon first viewing, makes one question why it hasn’t existed before."'
            author="Rami"
            initial="R"
            url="htts://www.twitter.com/modulz"
          />
        </Box>
        <Box fg_1 fb_0 bp1_ml_8>
          <SmallTestimonial
            quote='"Empowering designers to iterate on the *actual* product they are working on—this is the future of our industry"'
            author="Jack Lo Russo"
            initial="J"
            url="htts://www.twitter.com/modulz"
          />
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

// "It’s exciting to watch a small group of people working on an idea which will fundamentally change a discipline."
// This is going to be pretty sweet I think 👍🏻 a design tool that fully embraces the fact that it's helping you work with HTML and CSS. - Adam Wathan
// Any tool that reduces friction in getting prototypes in front of customers and stakeholders is a winner, but Modulz promises even more. Empowering designers to iterate on the *actual* product they're working on, not just pictures of it — this is the future of our industry. - Jack Lo Russo
// Our workflows as digital designers don't quite fit with traditional tooling. Terribly excited to see how Modulz redefines how we think about designing for screens. - Adam Morse
// "Whatever @colmtuite and his class of shameless Front End Design pals don’t stand to make money on/are not good at, is by definition totally unnecessary and actually an evil to be purged and eliminated from the design industry."'
// "This is one of those things, that upon first viewing, makes one question why it hasn't existed before."'

// Modulz is full of interesting ideas. Can't wait to try it out. - Koen Bok

export default WallOfLove
