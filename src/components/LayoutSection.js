import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';
import { Button } from 'radix-ds';
import { Select } from 'radix-ds';
import { Tooltip } from 'radix-ds';

import FadeLink from './FadeLink'
import LayoutPhone from './LayoutPhone'
import LayoutFlexbox from './LayoutFlexbox'

const LayoutSection = () => (
  <Section
    size3
    gray200
  >
    <Container
      size3
    >
      <Flexbox
        ai_center
        jc_center
      >
        <Box
          pr9
        >
          <Box
          >
            <Box
              mb5
            >
              <Heading
                size3
              >
                Flexbox
              </Heading>
            </Box>
            <Text
              size3
              lh3
              gray600
            >
              With Modulz you're in complete control of your layout. Tweak the direction, distribution, alignment or wrapping behaviour. You can even reverse a layout with one click!
            </Text>
            <Flexbox
              mt7
            >
              <Box
                mr2
              >
                <Tooltip
                  data-tooltip="Flexbox"
                  data-position="bottom"
                >
                  <button
                    type="button"
                    style={{
                      width: '10px',
                      height: '10px',
                      boxShadow: 'inset 0 0 0 1px black',
                      borderRadius: '50%',
                      appearance: 'none',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                  </button>
                </Tooltip>
              </Box>
              <Box
                mr2
              >
                <Tooltip
                  data-tooltip="Spacing"
                  data-position="bottom"
                >
                  <button
                    type="button"
                    style={{
                      width: '10px',
                      height: '10px',
                      boxShadow: 'inset 0 0 0 1px black',
                      borderRadius: '50%',
                      appearance: 'none',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                  </button>
                </Tooltip>
              </Box>
              <Box
                mr2
              >
                <Tooltip
                  data-tooltip="Pinning"
                  data-position="bottom"
                >
                  <button
                    type="button"
                    style={{
                      width: '10px',
                      height: '10px',
                      boxShadow: 'inset 0 0 0 1px black',
                      borderRadius: '50%',
                      appearance: 'none',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                  </button>
                </Tooltip>
              </Box>
              <Box
                mr2
              >
                <Tooltip
                  data-tooltip="Flexbox"
                  data-position="bottom"
                >
                  <button
                    type="button"
                    style={{
                      width: '10px',
                      height: '10px',
                      boxShadow: 'inset 0 0 0 1px black',
                      borderRadius: '50%',
                      appearance: 'none',
                      backgroundColor: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                  </button>
                </Tooltip>
              </Box>
            </Flexbox>
          </Box>
        </Box>
        <LayoutPhone />
      </Flexbox>
    </Container>
  </Section>
)

export default LayoutSection
