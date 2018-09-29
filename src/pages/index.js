import React from 'react'

import Layout from '../components/Layout'
import ComposerHero from '../components/ComposerHero'
import UseCases from '../components/UseCases'
import SupportedBy from '../components/SupportedBy'
import WallOfLove from '../components/WallOfLove'
import Blog from '../components/Blog'
import DividerSection from '../components/DividerSection'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout>
    <ComposerHero />
    <UseCases />
    <DividerSection />
    <SupportedBy />
    <DividerSection />
    <WallOfLove />
    <DividerSection />
    <Blog />
    <Footer />
  </Layout>
)

export default IndexPage
