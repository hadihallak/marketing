import React from 'react'
import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Text } from 'radix-ds';

import FadeLink from './FadeLink'

const Navigation = () => (
  <Section
    size1
  >
    <Container
    >
      <Flexbox
        ai_baseline
        jc_spacebetween
      >
        <Box>
          <Text
            size1
            gray500
          >
            &copy; Modulz
          </Text>
        </Box>
        <nav>
          <Flexbox>
            <FadeLink
              to="https://www.twitter.com/modulz"
              size1
              right
              data-content="Follow our Twitter"
              target="_blank"
            >
              Follow our Twitter
            </FadeLink>
            <FadeLink
              to="/https://spectrum.chat/modulz"
              size1
              right
              data-content="Join our community"
              target="_blank"
            >
              Join our community
            </FadeLink>
          </Flexbox>
        </nav>
      </Flexbox>
    </Container>
  </Section>
)

export default Navigation
