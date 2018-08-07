import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import ComposerHero from '../components/ComposerHero'
import UseCases from '../components/UseCases'
import FlexboxWidget from '../components/FlexboxWidget'
import PositionWidget from '../components/PositionWidget'
import Devices from '../components/Devices'
import States from '../components/States'
import CodeExport from '../components/CodeExport'
import Responsive from '../components/Responsive'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const ComposerPage = () => (
  <Layout>
    <ComposerHero />
    <UseCases />
    <FlexboxWidget />
    <Devices />
    <States />
    <CodeExport />
    <Responsive />
    <Navigation />
    <Footer />
  </Layout>
)

export default ComposerPage
