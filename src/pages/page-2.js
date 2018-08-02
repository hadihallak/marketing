import React from 'react'
import { Link } from 'gatsby'

import { Container } from 'radix-ds';
import { Heading } from 'radix-ds';

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <Container
      size3
    >
      <Heading>
        Hi people
      </Heading>
      <Link
        to="/"
      >
        Go back to the homepage
      </Link>
    </Container>
  </Layout>
)

export default SecondPage
