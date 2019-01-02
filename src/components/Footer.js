import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Text } from 'radix-ds';

import FadeLinkNotGatsby from './FadeLinkNotGatsby'
import FadeLink from './FadeLink'

const Navigation = () => (
  <Section
    size1
  >
    <Container size1>
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
          <Flexbox mb_6 bp1_mb_0>
            <Box>
              <FadeLink
                to="/careers"
                data-content="Careers"
              >
                Careers
              </FadeLink>
            </Box>
            <Box ml_7>
              <FadeLinkNotGatsby
                href="https://github.com/modulz/radix"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text size3>
                  Radix
                </Text>
              </FadeLinkNotGatsby>
            </Box>
            <Box ml_7>
              <FadeLinkNotGatsby
                href="https://www.twitter.com/modulz"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Text size3>
                  Twitter
                </Text>
              </FadeLinkNotGatsby>
            </Box>
            <Box ml_7>
              <FadeLinkNotGatsby
                href="https://spectrum.chat/modulz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Text size3>
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
