import React from 'react'
import { Link } from 'gatsby'

import {
  Section,
  Divider,
  Flexbox
} from 'radix-ds';

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
    <Section>
      <Flexbox jc_center>
        <Divider size3 />
      </Flexbox>
    </Section>
    <LayoutSection />
    <WallOfLove />
    <Section>
      <Flexbox jc_center>
        <Divider size3 />
      </Flexbox>
    </Section>
    <Resources />
    <Footer />
  </Layout>
)

export default IndexPage
