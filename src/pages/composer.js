import React from 'react'

import Layout from '../components/Layout'

import ComposerHero from '../components/ComposerHero'
import UseCases from '../components/UseCases'
import CoolFeatures from '../components/CoolFeatures'
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
    <CoolFeatures />
    <Devices />
    <States />
    <CodeExport />
    <Responsive />
    <Navigation />
    <Footer />
  </Layout>
)

export default ComposerPage
