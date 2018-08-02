import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import ComposerHero from '../components/ComposerHero'
import LayoutWidget from '../components/LayoutWidget'
import Devices from '../components/Devices'
import CodeExport from '../components/CodeExport'
import Responsive from '../components/Responsive'
import Navigation from '../components/Navigation'

const ComposerPage = () => (
  <Layout>
    <ComposerHero />
    <LayoutWidget />
    <Devices />
    <CodeExport />
    <Responsive />
    <Navigation />
  </Layout>
)

export default ComposerPage
