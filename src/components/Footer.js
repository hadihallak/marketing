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
        column_reverse
        bp1_row
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
          <Flexbox column bp1_row mb8 bp1_mb0>
            <Box mb6 bp1_mb0>
              <FadeLinkNotGatsby
                href="https://github.com/modulz/radix"
                target="_blank"
              >
                <Text size4 bp1_size2>
                  Radix
                </Text>
              </FadeLinkNotGatsby>
            </Box>
            <Box mb6 bp1_mb0 bp1_ml6>
              <FadeLinkNotGatsby
                href="https://www.twitter.com/modulz"
                target="_blank"
              >
                <Text size4 bp1_size2>
                  Twitter
                </Text>
              </FadeLinkNotGatsby>
            </Box>
            <Box bp1_ml6>
              <FadeLinkNotGatsby
                href="https://spectrum.chat/modulz"
                target="_blank"
              >
                <Text size4 bp1_size2>
                  Spectrum
                </Text>
              </FadeLinkNotGatsby>
            </Box>
          </Flexbox>
        </nav>
      </Flexbox>
    </Container>
  </Section>
)

export default Navigation
