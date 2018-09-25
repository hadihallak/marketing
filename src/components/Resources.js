import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const Resources = () => (
  <Section
    size3
    gray200
  >
    <Container
      size2
    >
      <Box>
        <Heading
          size5
        >
         Further reading on what we are building
        </Heading>
      </Box>
      <Flexbox>
        <Box
          p4
          border
          bcgray300
          fg1
          style={{
            flexBasis: '0',
            borderColor: 'hsl(208,90%,86%)',
          }}
        >
          <Heading
            size3
            lh3
          >
            The design tool dilemma
          </Heading>
          <Text
            size3
            lh2
            gray600
          >
            A detailed look at two opposing narratives emerging in the design tool space.
          </Text>
          <Link
            to="/composer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
          </Link>
        </Box>
        <Box
          p4
          border
          bcgray300
          fg1
          style={{
            flexBasis: '0',
            borderColor: 'hsl(208,90%,86%)',
          }}
        >
          <Heading
            size3
            lh3
          >
            The Design Tool Dilemma
          </Heading>
          <Text
            size3
            lh2
            gray600
          >
            A detailed look at two opposing narratives emerging in the design tool space.
          </Text>
          <Link
            to="/composer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
          </Link>
        </Box>
        <Box
          p4
          border
          bcgray300
          fg1
          style={{
            flexBasis: '0',
            borderColor: 'hsl(208,90%,86%)',
          }}
        >
          <Heading
            size3
            lh3
          >
            Designs tools are running out of track
          </Heading>
          <Text
            size3
            lh2
            gray600
          >
            A detailed look at two opposing narratives emerging in the design tool space.
          </Text>
          <Link
            to="/composer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
          </Link>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default Resources
