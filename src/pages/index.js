import React from 'react'
import { Link } from 'gatsby'

import { Container } from 'radix-ds';
import { Heading } from 'radix-ds';

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Container
      size3
    >
      <Heading>
        Hi people
      </Heading>
      <Link
        to="/page-2/"
      >
        Go to page 2
      </Link>
    </Container>
  </Layout>
)

export default IndexPage
