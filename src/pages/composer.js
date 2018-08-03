import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import ComposerHero from '../components/ComposerHero'
import FlexboxWidget from '../components/FlexboxWidget'
import PositionWidget from '../components/PositionWidget'
import Devices from '../components/Devices'
import CodeExport from '../components/CodeExport'
import Responsive from '../components/Responsive'
import Navigation from '../components/Navigation'

const ComposerPage = () => (
  <Layout>
    <ComposerHero />
    <FlexboxWidget />
    <Devices />
    <CodeExport />
    <Responsive />
    <Navigation />
  </Layout>
)

export default ComposerPage
