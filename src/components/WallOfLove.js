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
    size3
    style={{
      position: 'relative'
    }}
  >
    <Container
      size3
    >
          <LargeTestimonial
            quote="It’s exciting to watch a small group of people working on an idea which will fundamentally change a discipline."
          />
    </Container>
  </Section>
)

// "It’s exciting to watch a small group of people working on an idea which will fundamentally change a discipline."
// "Modulz is one of the most exciting design tools I've seen. This could completely revolutionize design workflows."
// "I can’t describe how excited I am for Modulz. You should follow along if you aren’t already."
// This is going to be pretty sweet I think 👍🏻 a design tool that fully embraces the fact that it's helping you work with HTML and CSS. - Adam Wathan
// Any tool that reduces friction in getting prototypes in front of customers and stakeholders is a winner, but Modulz promises even more. Empowering designers to iterate on the *actual* product they're working on, not just pictures of it — this is the future of our industry. - Jack Lo Russo
// Our workflows as digital designers don't quite fit with traditional tooling. Terribly excited to see how Modulz redefines how we think about designing for screens. - Adam Morse
// "Whatever @colmtuite and his class of shameless Front End Design pals don’t stand to make money on/are not good at, is by definition totally unnecessary and actually an evil to be purged and eliminated from the design industry."
// "This is one of those things, that upon first viewing, makes one question why it hasn't existed before."

// Modulz is full of interesting ideas. Can't wait to try it out. - Koen Bok

export default WallOfLove
