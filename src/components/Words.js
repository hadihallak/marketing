import React from 'react'
import styled, { css, keyframes } from 'styled-components';

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Text } from 'radix-ds';
import { Heading } from 'radix-ds';

const Words = () => (
  <Section
    gray200
    size1
    height_100
    style={{
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      textAlign: 'center'
    }}
  >
    <Container
      size2
    >
        <Box>
          <Heading
            size4
            gray600
            style={{
              position: 'relative',
              display: 'none'
            }}
          >
            Symbols
          </Heading>
          <Heading
            size6
            style={{
              fontFamily: 'UntitledSans-Medium',
              fontSize: '72px',
              // display: 'none'
            }}
          >
            Spring 2019
          </Heading>
        </Box>
    </Container>
  </Section>
)

export default Words
