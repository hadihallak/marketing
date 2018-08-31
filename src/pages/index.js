import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import ComposerHero from '../components/ComposerHero'
import UseCases from '../components/UseCases'
import LayoutSection from '../components/LayoutSection/LayoutSection'
import States from '../components/States'
import CoolFeatures from '../components/CoolFeatures'
import CodeExport from '../components/CodeExport'
import Responsive from '../components/Responsive'
import WallOfLove from '../components/WallOfLove'
import Resources from '../components/Resources'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout>
    <ComposerHero />
    <UseCases />
    <LayoutSection />
    <States />
    <CoolFeatures />
    <Responsive />
    <CodeExport />
    <WallOfLove />
    <Resources />
    <Navigation />
    <Footer />
  </Layout>
)

export default IndexPage
