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

import StephenMug from "./../assets/stephen-mugshot.jpg"
import ColmMug from "./../assets/colm-mugshot.jpg"

import FadeLinkNotGatsby from './../components/FadeLinkNotGatsby'

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
      <Container size1 bp1_size4>
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

    <Section size2 bp1_size3>
      <Container size3>
        <Heading
          size5
          lh_5
          bold
          mb_3
          as="h3"
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
      <Container size3>
        <Flexbox fd_column bp1_fd_row>
          <Box fg_1 fb_0 mb_5 bp1_mb_0 bp1_mr_5>
            <AspectRatio ratio_169>
              <Box
                height_100
                style={{
                  backgroundImage: `url(${StephenMug})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}>
              </Box>
            </AspectRatio>
            <Box mt_7 pl_7 pr_7>
              <Heading
                size2
                lh_2
                bold
                mb_3
              >
                Stephen Haney
              </Heading>
              <Text
                as="p"
                size3
                lh_2
                color_gray600
              >
                More dev than design. Back-end. Front-end. Lots of JavaScript. React. ES6. Redux.
              </Text>
              <Flexbox mt_6>
                <Box mr_5>
                  <FadeLinkNotGatsby
                    href="https://twitter.com/sdothaney"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    <Text size3>
                      Tw
                    </Text>
                  </FadeLinkNotGatsby>
                </Box>
                <Box mr_5>
                  <FadeLinkNotGatsby
                    href="https://github.com/StephenHaney"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                  >
                    <Text size3>
                      Gh
                    </Text>
                  </FadeLinkNotGatsby>
                </Box>
              </Flexbox>
            </Box>
          </Box>
          <Box fg_1 fb_0 mt_5 bp1_mt_0 bp1_ml_5>
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
            <Box mt_7 pl_7 pr_7>
              <Heading
                size2
                lh_1
                bold
                mb_3
              >
                Colm Tuite
              </Heading>
              <Text
                as="p"
                size3
                lh_2
                color_gray600
              >
                More design than dev. Product design. Front-end. Design systems. Assets.
              </Text>
              <Flexbox mt_6>
                <Box mr_5>
                  <FadeLinkNotGatsby
                    href="https://www.twitter.com/colmtuite"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Twitter"
                  >
                    <Text size3>
                      Tw
                    </Text>
                  </FadeLinkNotGatsby>
                </Box>
                <Box mr_5>
                  <FadeLinkNotGatsby
                    href="https://github.com/colmtuite"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Github"
                  >
                    <Text size3>
                      Gh
                    </Text>
                  </FadeLinkNotGatsby>
                </Box>
                <Box mr_5>
                  <FadeLinkNotGatsby
                    href="https://medium.com/@colmtuite"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Medium"
                  >
                    <Text size3>
                      Mm
                    </Text>
                  </FadeLinkNotGatsby>
                </Box>
                <Box>
                  <FadeLinkNotGatsby
                    href="https://dribbble.com/ColmTuite"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Dribbble"
                  >
                    <Text size3>
                      Db
                    </Text>
                  </FadeLinkNotGatsby>
                </Box>
              </Flexbox>
            </Box>
          </Box>
        </Flexbox>
      </Container>
    </Section>
    <DividerSection />
    <Cta />
    <Box mb_9>
      <DividerSection />
    </Box>
    <Footer />
  </Layout>
)

export default AboutPage
