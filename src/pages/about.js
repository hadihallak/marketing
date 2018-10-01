import React from 'react'
import {
  Section,
  Container,
  Box,
  Heading,
  Text,
  Flexbox,
  AspectRatio,
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
          Team
        </Heading>
        <Text
          size5
          lh_3
          color_gray600
          mb_6
          bp1_mb_8
          ta_center
        >
           Who we are and what we do.
        </Text>
      </Container>
      <Container size2>
        <Flexbox>
          <Box fg_1 fb_0 mr_7>
            <AspectRatio ratio_169>
              <Box
                height_100
                style={{
                  backgroundImage: `url(${ColmMug})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
              </Box>
            </AspectRatio>
            <Box mt_7 pl_9 pr_9>
              <Heading
                size3
                bold
                mb_4
              >
                Stephen Haney
              </Heading>
              <Text
                as="p"
                size4
                lh_3
                color_gray600
              >
                Mostly dev with a little design.<br/> Back-end. Front-end. Lots of JavaScript. React. ES6. Redux.
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
                      Twitter
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
                      Github
                    </Text>
                  </a>
                </Box>
              </Flexbox>
            </Box>
          </Box>
          <Box fg_1 fb_0 ml_7>
            <AspectRatio ratio_169>
              <Box
                height_100
                style={{
                  backgroundImage: `url(${ColmMug})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
              </Box>
            </AspectRatio>
            <Box mt_7 pl_9 pr_9>
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
                Mostly design with a little dev. Product design. Front-end. Design systems. Design assets.
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
                      Twitter
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
                      Dribbble
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
