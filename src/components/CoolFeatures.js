import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';
import { Button } from 'radix-ds';
import { Select } from 'radix-ds';

import StatesButton from './StatesButton';
import StatesInput from './StatesInput';
import StatesRadio from './StatesRadio';
import StatesCheckbox from './StatesCheckbox';
import StatesIcon from './StatesIcon';
import StatesSlider from './StatesSlider';

import UnitTypesIllustration from './UnitTypesIllustration';

const CoolFeatures = () => (
  <div>
    <Section
      size3
    >
      <Container
        size3
      >
        <Flexbox>
          <Box
            mr6
            fg1
            style={{
              flexBasis: '0',
            }}
          >
            <Heading
              size3
              lh2
              mb5
            >
              Units
            </Heading>
            <Text
              size3
              lh3
              gray600
            >
              Choose from a powerful set of unit types to gain complete control over your design.
            </Text>
            <Box
              mt6
              table
            >
              <Box
                tablerow
              >
                <Box
                  tablecell
                  pr4
                >
                  <Text
                    size2
                    lh1
                    blue500
                  >
                    px
                  </Text>
                </Box>
                <Box
                  tablecell
                >
                  <Text
                    size2
                    lh2
                    gray600
                  >
                    Defined in pixels.
                  </Text>
                </Box>
              </Box>
              <Box pt3></Box>
              <Box
                tablerow
              >
                <Box
                  tablecell
                  pr4
                >
                  <Text
                    size2
                    lh1
                    blue500
                  >
                    %
                  </Text>
                </Box>
                <Box
                  tablecell
                >
                  <Text
                    size2
                    lh2
                    gray600
                  >
                    A percentage of the dimensions of its parent.
                  </Text>
                </Box>
              </Box>
              <Box pt3></Box>
              <Box
                tablerow
              >
                <Box
                  tablecell
                  pr4
                >
                  <Text
                    size2
                    lh1
                    blue500
                  >
                    vw
                  </Text>
                </Box>
                <Box
                  tablecell
                >
                  <Text
                    size2
                    lh2
                    gray600
                  >
                    A percentage of the screen width.
                  </Text>
                </Box>
              </Box>
              <Box pt3></Box>
              <Box
                tablerow
              >
                <Box
                  tablecell
                  pr4
                >
                  <Text
                    size2
                    lh1
                    blue500
                  >
                    vw
                  </Text>
                </Box>
                <Box
                  tablecell
                >
                  <Text
                    size2
                    lh2
                    gray600
                  >
                    A percentage of the screen height.
                  </Text>
                </Box>
              </Box>
              <Box pt3></Box>
              <Box
                tablerow
              >
                <Box
                  tablecell
                  pr4
                >
                  <Text
                    size2
                    lh1
                    blue500
                  >
                    math
                  </Text>
                </Box>
                <Box
                  tablecell
                >
                  <Text
                    size2
                    lh2
                    gray600
                  >
                    Use math to define the desired value.
                  </Text>
                </Box>
              </Box>
              <Box pt3></Box>
              <Box
                tablerow
              >
                <Box
                  tablecell
                  pr4
                >
                  <Text
                    size2
                    lh1
                    blue500
                  >
                    auto
                  </Text>
                </Box>
                <Box
                  tablecell
                >
                  <Text
                    size2
                    lh2
                    gray600
                  >
                    Let the content dictate the dimensions.
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box
            ml6
            fg1
            style={{
              flexBasis: '0',
            }}
          >
            <UnitTypesIllustration />
          </Box>
        </Flexbox>
      </Container>
    </Section>
  </div>
)

export default CoolFeatures
