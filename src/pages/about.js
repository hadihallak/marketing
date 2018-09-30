import React from 'react'
import {
  Section,
  Container,
  Box,
  Heading,
  Text,
  Theme,
  Flexbox,
  Avatar,
  HoverZone,
  HoverZonePanel
} from 'radix-ds';

import Layout from '../components/Layout'
import Cta from '../components/Cta'
import DividerSection from '../components/DividerSection'
import Footer from '../components/Footer'

const AboutPage = () => (
  <Layout>
    <Section size3>
      <Container size3>
        <Heading
          size5
          bold
          mb_6
        >
          A design tool for the ages
        </Heading>
        <Text
          as="p"
          size4
          lh_4
          mb_5
        >
          The vast majority of people in the design tools space are trying to make illustration tools more powerful. This is a dead-end. The output is capped and there is no way around it. I'm focused on making code editors more accessible.
        </Text>
        <Text
          as="p"
          size5
          lh_4
          mb_5
        >
        The reason we are all working on product imitations, is that to work on the actual product, you must be able to write code—and code is not easy to write.
        </Text>
        <Text
          as="p"
          size5
          lh_4
          mb_5
        >
          The thing is, many designers already understand the concepts behind code. Style properties, document flow (nested groups), variables (global styles), components and versioning are all features which already exist inside our current design tools.
        </Text>
        <Text
          as="p"
          size5
          lh_4
          mb_5
        >
          The thing is, many designers already understand the concepts behind code. Style properties, document flow (nested groups), variables (global styles), components and versioning are all features which already exist inside our current design tools.
        </Text>
      </Container>
    </Section>
    <Section size3>
      <Container size2>
        <Flexbox>
          <Box fg_1 fb_0 mr_7>
            <Box mb_5 style={{height: '260px',background: 'coral', backgroundImage: 'url("https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </Box>
            <Box pl_9 pr_9>
              <Heading
                size3
                bold
                mb_3
              >
                Colm Tuite
              </Heading>
              <Text
                as="p"
                size4
                lh_3
                color_gray600
              >
                Design system. Product strategy. JavaScript not so much.
              </Text>
              <Flexbox mt_5>
                <Box mr_5>
                  <a
                    href="https://www.twitter.com/colmtuite"
                  >
                    <Text
                      as="p"
                      size3
                      color_gray600
                    >
                      Tw
                    </Text>
                  </a>
                </Box>
                <Box mr_5>
                  <a
                    href="https://www.twitter.com/colmtuite"
                  >
                    <Text
                      as="p"
                      size3
                      color_gray600
                    >
                      Tw
                    </Text>
                  </a>
                </Box>
              </Flexbox>
            </Box>
          </Box>
          <Box fg_1 fb_0 ml_7>
            <Box mb_5 style={{height: '260px',background: 'coral', backgroundImage: 'url("https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            </Box>
            <Box pl_9 pr_9>
              <Heading
                size3
                bold
                mb_3
              >
                Colm Tuite
              </Heading>
              <Text
                as="p"
                size4
                lh_3
                color_gray600
              >
                Design system. Product strategy. JavaScript not so much.
              </Text>
              <Flexbox mt_5>
                <Box mr_5>
                  <a
                    href="https://www.twitter.com/colmtuite"
                  >
                    <Text
                      as="p"
                      size3
                      color_gray600
                    >
                      Tw
                    </Text>
                  </a>
                </Box>
                <Box ml_5>
                  <a
                    href="https://www.twitter.com/colmtuite"
                  >
                    <Text
                      as="p"
                      size3
                      color_gray600
                    >
                      Tw
                    </Text>
                  </a>
                </Box>
              </Flexbox>
            </Box>
          </Box>
        </Flexbox>
      </Container>
    </Section>
    <DividerSection />
    <Cta />
    <DividerSection />
    <Footer />
  </Layout>
)

export default AboutPage
