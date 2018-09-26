import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'
import Header from '../components/Header'
import ComposerHero from '../components/ComposerHero'
import UseCases from '../components/UseCases'
import SupportedBy from '../components/SupportedBy'
import LayoutSection from '../components/LayoutSection/LayoutSection'
import WallOfLove from '../components/WallOfLove'
import Resources from '../components/Resources'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout>
    <Header />
    <ComposerHero />
    <UseCases />
    <SupportedBy />
    <LayoutSection />
    <WallOfLove />
    <Resources />
    <Footer />
  </Layout>
)

export default IndexPage
