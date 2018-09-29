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
        fd_column_reverse
        bp1_fd_row
      >
        <Box>
          <Text
            size2
            color_gray500
          >
            &copy; Modulz
          </Text>
        </Box>
        <nav>
          <Flexbox fd_column bp1_fd_row mb_8 bp1_mb_0>
            <Box mb_6 bp1_mb_0>
              <FadeLinkNotGatsby
                href="https://github.com/modulz/radix"
                target="_blank"
              >
                <Text size5 bp1_size3>
                  Radix
                </Text>
              </FadeLinkNotGatsby>
            </Box>
            <Box mb_6 bp1_mb_0 bp1_ml_6>
              <FadeLinkNotGatsby
                href="https://www.twitter.com/modulz"
                target="_blank"
              >
                <Text size5 bp1_size3>
                  Twitter
                </Text>
              </FadeLinkNotGatsby>
            </Box>
            <Box bp1_ml_6>
              <FadeLinkNotGatsby
                href="https://spectrum.chat/modulz"
                target="_blank"
              >
                <Text size5 bp1_size3>
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
