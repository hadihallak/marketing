import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

import IPhoneSE from './IPhoneSE'
import IPhone8 from './IPhone8'
import IPhoneX from './IPhoneX'
import IPad from './IPad'

const Devices = () => (
  <Section
    size3
    style={{
      height: '1038px'
    }}
  >
    <Container
      size4
    >
      <Box
        mb8
      >
        <Heading
          size4
          gray600
          mb1
        >
          Artboards
        </Heading>
        <Heading
          size4
          gray600
          mb1
        >
          Frames
        </Heading>
        <Heading
          size4
          mb5
        >
          Devices
        </Heading>
        <Text
          size3
          lh3
        >
          Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
        </Text>
      </Box>
    </Container>
    <Box
      style={{
        transform: 'scale(.5)',
        transformOrigin: 'top left',
      }}
    >
      <Flexbox>
        <Box
          mr4
        >
          <IPhoneSE>
            <Box
              p4
              blue500
            >
            </Box>
          </IPhoneSE>
        </Box>
        <Box
          mr4
        >
          <IPhone8>
            <Box
              p4
              blue500
            >
            </Box>
          </IPhone8>
        </Box>
        <Box
          mr4
        >
          <IPhoneX>
            <Box
              p4
              blue500
            >
            </Box>
          </IPhoneX>
        </Box>
        <Box
          mr4
        >
          <IPad>
            <Box
              p4
              blue500
            >
            </Box>
          </IPad>
        </Box>
      </Flexbox>
    </Box>
  </Section>
)

export default Devices
