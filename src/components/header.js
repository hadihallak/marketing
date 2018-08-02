import React from 'react'
import { Link } from 'gatsby'

import { Container } from 'radix-ds';
import { Heading } from 'radix-ds';

const Header = ({ siteTitle }) => (
  <header>
    <Container
      size3
    >
      <Link
        to="/"
      >
        <Heading>
          {siteTitle}
        </Heading>
      </Link>
    </Container>
  </header>
)

export default Header
