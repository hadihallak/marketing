import React from 'react'
import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Text } from 'radix-ds';

import FadeLinkNotGatsby from './FadeLinkNotGatsby'

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
            <Box>
              <FadeLinkNotGatsby
                href="https://www.twitter.com/modulz"
                data-content="Twitter"
                target="_blank"
              >
                Twitter
              </FadeLinkNotGatsby>
            </Box>
            <Box ml6>
              <FadeLinkNotGatsby
                href="https://spectrum.chat/modulz"
                data-content="Spectrum"
                target="_blank"
              >
                Spectrum
              </FadeLinkNotGatsby>
            </Box>
          </Flexbox>
        </nav>
      </Flexbox>
    </Container>
  </Section>
)

export default Navigation
