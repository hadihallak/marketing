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
  HoverZonePanel,
  AspectRatio,
  BackgroundImage
} from 'radix-ds';

import Layout from '../components/Layout'
import Tweets from '../components/Tweets'
import Cta from '../components/Cta'
import DividerSection from '../components/DividerSection'
import Footer from '../components/Footer'

import ColmMug from "./../assets/colm-mugshot.jpg"

const AboutPage = () => (
  <Layout>
    <Section size2>
      <Container
        size3
      >
        <Heading
          size3
          bp1_size4
          lh_4
          bp1_lh_5
          as="h1"
          mb_5
          bp1_mb_7
        >
          With Modulz, our goal is to fix the disconnect between digital product teams.
        </Heading>
      </Container>
      <Container bp1_size4>
        <Text
          as="p"
          size4
          bp1_size5
          lh_3
          color_gray600
          mb_5
        >
          To help designers collaborate with developers, without code.
        </Text>
        <Text
          as="p"
          size4
          bp1_size5
          lh_3
          color_gray600
          mb_5
        >
          To encourage inclusive digital products by automating accessibility.
        </Text>
        <Text
          as="p"
          size4
          bp1_size5
          lh_3
          color_gray600
          mb_5
        >
          To reduce bottlenecks by building modern tools which empower whole teams to work on their end products.
        </Text>
        <Text
          as="p"
          size4
          bp1_size5
          lh_3
          color_gray600
          bp1_mb_7
        >
          To get everyone working on the same product. Together.
        </Text>
      </Container>
    </Section>

    <DividerSection />

    <Tweets />

    <DividerSection />

    <Section size3>
      <Container size3>
        <Heading
          size5
          lh_5
          bold
          mb_3
          as="h5"
          ta_center
        >
          The team
        </Heading>
        <Text
          size5
          lh_3
          color_gray600
          mb_6
          bp1_mb_7
          ta_center
        >
           Who we are and what we do.
        </Text>
      </Container>
      <Container size2>
        <Flexbox>
          <Box fg_1 fb_0 mr_7>
            <AspectRatio ratio_169>
              <BackgroundImage
                mb_7
                src="./../assets/colm-mugshot.jpg">
              </BackgroundImage>
            </AspectRatio>
            <Box pl_9 pr_9>
              <Heading
                size3
                bold
                mb_3
              >
                Stephen Haney
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
            <AspectRatio ratio_169>
              <BackgroundImage
                mb_7
                src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_400x400.jpg">
              </BackgroundImage>
            </AspectRatio>
            <Box pl_9 pr_9>
              <Heading
                size3
                bold
                mb_4
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
              <Flexbox mt_6>
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
    <Cta />
    <Box mt_8 mb_9>
      <DividerSection />
    </Box>
    <Footer />
  </Layout>
)

export default AboutPage
