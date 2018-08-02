import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import WallOfLove from '../components/WallOfLove'
import Navigation from '../components/Navigation'

const IndexPage = () => (
  <Layout>
    <WallOfLove />
    <Navigation />
  </Layout>
)

export default IndexPage
