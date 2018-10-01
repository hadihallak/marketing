import React from 'react'

import Layout from '../components/Layout'
import ComposerHero from '../components/ComposerHero'
import UseCases from '../components/UseCases'
import SupportedBy from '../components/SupportedBy'
import WallOfLove from '../components/WallOfLove'
import Cta from '../components/Cta'
import Blog from '../components/Blog'
import DividerSection from '../components/DividerSection'
import Navigation from '../components/Navigation'
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
    <Cta />
    <DividerSection />
    <Blog />
    <Navigation />
    <Footer />
  </Layout>
)

export default IndexPage
