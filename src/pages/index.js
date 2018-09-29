import React from 'react'

import {
  Section,
  Divider,
  Flexbox
} from 'radix-ds';

import Layout from '../components/Layout'
import ComposerHero from '../components/ComposerHero'
import UseCases from '../components/UseCases'
import SupportedBy from '../components/SupportedBy'
import WallOfLove from '../components/WallOfLove'
import Blog from '../components/Blog'
import Footer from '../components/Footer'

const IndexPage = () => (
  <Layout>
    <ComposerHero />
    <UseCases />
    <Section>
      <Flexbox jc_center>
        <Divider size3 />
      </Flexbox>
    </Section>
    <SupportedBy />
    <Section>
      <Flexbox jc_center>
        <Divider size3 />
      </Flexbox>
    </Section>
    {/*<LayoutSection />*/}
    <WallOfLove />
    <Section>
      <Flexbox jc_center>
        <Divider size3 />
      </Flexbox>
    </Section>
    <Blog />
    <Footer />
  </Layout>
)

export default IndexPage
