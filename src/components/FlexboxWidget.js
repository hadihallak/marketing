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

const FlexboxWidget = () => (
  <Section
    size3
  >
    <Container
      size2
    >
      <Flexbox
        ai_center
      >
        <Box
          fg1
          pr8
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
        </Box>
        <Box
          relative
          gray100
          border
          bcgray300
          fs0
          mr8
          style={{
            width: '220px',
          }}
        >
          <Box
            style={{
              position: 'absolute',
              top: '0',
              zIndex: '1',
              left: '0',
              width: '100%',
              height: '100%',
              // backgroundColor: 'rgba(255,255,255,.5)',
              boxShadow: '0 35px 55px 10px hsla(208,30%,10%,.05)',
            }}
          >
          </Box>
          <Box
            relative
            gray100
            style={{
              top: '-15px',
              left: '-15px',
              zIndex: '2',
              boxShadow: '0 35px 55px 10px hsla(208,30%,10%,.05)',
              width: 'calc(100% + 30px)',
              height: 'calc(100% + 30px)'
            }}
          >
            <LayoutFlexbox />
          </Box>
          <LayoutFlexbox />
          <LayoutFlexbox />
          <LayoutFlexbox />
        </Box>
        <Box
          mb5
          pl9
          fg1
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
            mb9
          >
            With Modulz you're in complete control of your layout. Tweak the direction, distribution, alignment or wrapping behaviour. You can even reverse a layout with one click!
          </Text>
          <FadeLink
            size1
            data-content="Next (Padding)"
          >
            Next (Padding)
          </FadeLink>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default FlexboxWidget
