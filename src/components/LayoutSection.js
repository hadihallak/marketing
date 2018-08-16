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

import FadeLink from './FadeLink'
import IPhoneX from './IPhoneX'
import LayoutFlexbox from './LayoutFlexbox'

const LayoutSection = () => (
  <Section
    size3
    style={{
      backgroundColor: 'hsl(208,30%,97%)'
    }}
  >
    <Container
    >
      <Flexbox
        jc_center
      >
        <Box
          style={{
            position: 'relative'
          }}
        >
          <IPhoneX>
            <Box
              gray300
            >
              <Box
                blue500
                style={{
                  height: '50px'
                }}
              >
              </Box>
              <Box
                p4
                mt1
                mb1
                white
              >
                <Text>
                  ewfwe
                </Text>
                <Button
                  blue
                >
                  Add friend
                </Button>
              </Box>
              <Box
                p4
                mt1
                mb1
                white
              >
                <Text>
                  ewfwe
                </Text>
                <Button
                  blue
                >
                  Add friend
                </Button>
              </Box>
              <Box
                p4
                mt1
                mb1
                white
              >
                <Text>
                  ewfwe
                </Text>
                <Button
                  blue
                >
                  Add friend
                </Button>
              </Box>
              <Box
                p4
                mt1
                mb1
                white
              >
                <Text>
                  ewfwe
                </Text>
                <Button
                  blue
                >
                  Add friend
                </Button>
              </Box>
              <Box
                p4
                mt1
                mb1
                white
              >
                <Text>
                  ewfwe
                </Text>
                <Button
                  blue
                >
                  Add friend
                </Button>
              </Box>
              <Box
                p4
                mt1
                mb1
                white
              >
                <Text>
                  ewfwe
                </Text>
                <Button
                  blue
                >
                  Add friend
                </Button>
              </Box>
            </Box>
          </IPhoneX>
          <Box
            fs0
            style={{
              position: 'absolute',
              top: '-120px',
              left: '-150px',
              width: '220px',
            }}
          >
            <LayoutFlexbox />
            <Box
              style={{
                position: 'relative',
                left: '-150px',
              }}
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
            </Box>
          </Box>

          <Box
            fs0
            style={{
              position: 'absolute',
              top: '120px',
              right: '-150px',
              width: '220px',
            }}
          >
            <LayoutFlexbox />
            <Box
              style={{
                position: 'relative',
                top: '-150px',
                right: '-270px',
              }}
            >
              <Box
                mb5
              >
                <Heading
                  size3
                >
                  Spacing
                </Heading>
              </Box>
              <Text
                size3
                lh3
                gray600
              >
                With Modulz you're in complete control of your layout. Tweak the direction, distribution, alignment or wrapping behaviour. You can even reverse a layout with one click!
              </Text>
            </Box>
          </Box>

          <Box
            fs0
            style={{
              position: 'absolute',
              bottom: '-150px',
              left: '-150px',
              width: '220px',
            }}
          >
            <LayoutFlexbox />
            <Box
              style={{
                position: 'relative',
                top: '-140px',
                left: '-250px',
              }}
            >
              <Box
                mb5
              >
                <Heading
                  size3
                >
                  Scroll areas
                </Heading>
              </Box>
              <Text
                size3
                lh3
                gray600
              >
                With Modulz you're in complete control of your layout. Tweak the direction, distribution, alignment or wrapping behaviour. You can even reverse a layout with one click!
              </Text>
            </Box>
          </Box>

          <Box
            fs0
            style={{
              position: 'absolute',
              bottom: '-320px',
              right: '-150px',
              width: '220px',
            }}
          >
            <LayoutFlexbox />
            <Box
              style={{
                position: 'relative',
                top: '-150px',
                right: '-270px',
              }}
            >
              <Box
                mb5
              >
                <Heading
                  size3
                >
                  Position
                </Heading>
              </Box>
              <Text
                size3
                lh3
                gray600
              >
                With Modulz you're in complete control of your layout. Tweak the direction, distribution, alignment or wrapping behaviour. You can even reverse a layout with one click!
              </Text>
            </Box>
          </Box>

        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default LayoutSection
