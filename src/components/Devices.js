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
      backgroundColor: 'hsl(208,30%,97%)',
      height: '1038px'
    }}
  >
    <Container
      size2
    >
    <Box
      mr6
    >
      <Heading
        size4
        gray600
        mb_1
      >
        Artboards
      </Heading>
      <Heading
        size4
        gray600
        mb_1
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
    <Box
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
  </Container>
  </Section>
)

export default Devices
