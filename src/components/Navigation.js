import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Text } from 'radix-ds';

const Navigation = () => (
  <Section
    size3
  >
    <Container
      size3
    >
      <Link
        to="/composer"
      >
        <Text
          size6
        >
          Check out our features
        </Text>
      </Link>
      <Link
        to="/"
      >
        <Text
          size4
        >
          Go to page 2
        </Text>
      </Link>
    </Container>
  </Section>
)

export default Navigation
