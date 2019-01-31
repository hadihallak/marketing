import React from 'react'
import {
  Section,
  Container,
  Box,
  Heading,
  Text,
  Flexbox,
  Grid,
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

const CareersPage = () => (
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
          Help us build the future of visual coding by bringing design closer to engineering.
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
          Modulz is a very early-stage, VC-backed startup.
        </Text>
        <Text
          as="p"
          size4
          bp1_size5
          lh_3
          color_gray600
          mb_5
        >
          Our first product is a visual code editor. We make it easy for teams to manage their design system, build a component library and design interfaces—all without writing code.
        </Text>
        <Text
          as="p"
          size4
          bp1_size5
          lh_3
          color_gray600
        >
          Our goal is to improve cross-team collaboration by getting everyone working on the same product, together.
        </Text>
      </Container>
    </Section>

    <Box mt_4 mb_2>
      <DividerSection />
    </Box>

    <Section size2>
      <Container size1 bp1_size3>
        <Heading
          size3
          bp1_size4
          lh_4
          bp1_lh_5
          as="h1"
          mb_5
          bp1_mb_8
          ta_center
        >
          Our values
        </Heading>
        <Grid size2 bp1_size3 bp1_cells_2>
          <Box>
            <Heading size2 lh_2 bold mb_1>
              Freedom
            </Heading>
            <Text
              as="p"
              size4
              lh_3
            >
              Work from anywhere in the world. Choose your own hours and get ample time off. Meetings are kept to a minimum.
            </Text>
          </Box>
          <Box>
            <Heading size2 lh_2 bold mb_1>
              Diversity
            </Heading>
            <Text
              as="p"
              size4
              lh_3
            >
              We're committed to building an inclusive company. We're serious about creating an environment where everyone feels welcome and appreciated.
            </Text>
          </Box>
          <Box>
            <Heading size2 lh_2 bold mb_1>
              Autonomy
            </Heading>
            <Text
              as="p"
              size4
              lh_3
            >
              Your ideas and opinions will be heard. You will have the freedom to lead projects. We want you to feel invested in your work and proud of it.
            </Text>
          </Box>
          <Box>
            <Heading size2 lh_2 bold mb_1>
              Curiosity
            </Heading>
            <Text
              as="p"
              size4
              lh_3
            >
              Ask questions. Experiment with new ideas and tech. Reach out to customers and learn about their workflows. Be curious.
            </Text>
          </Box>

        </Grid>
      </Container>
    </Section>

    <Box mt_4 mb_2>
      <DividerSection />
    </Box>

    <Section size2>
      <Container size1 bp1_size3>
        <Heading
          size3
          bp1_size4
          lh_4
          bp1_lh_5
          as="h1"
          mb_5
          bp1_mb_8
          ta_center
        >
          Perks &amp; benefits
        </Heading>
        <Grid size2 bp1_size3 bp1_cells_2>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Salary
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              $90k base salary.
            </Text>
          </Box>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Skin in the game
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              The first 2 employees receive 1% stock options.
            </Text>
          </Box>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Time off
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              30 days paid time off for vacation, holidays & sick days
            </Text>
          </Box>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Work remotely
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              Work from anywhere in the world. Choose your own hours.
            </Text>
          </Box>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Health insurance
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              Health & dental coverage. We pay 75% of your premium.
            </Text>
          </Box>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Remote stipend
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              $200 monthly stipend for hotdesking, travel, hipster coffee or fancy headphones.
            </Text>
          </Box>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Wellness stipend
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              $50 monthly stipend for gym, yoga or whatever you need to stay healthy.
            </Text>
          </Box>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Conference pass
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              One free ticket to a conference of your choice.
            </Text>
          </Box>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Office goodies
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              $1k upfront to help kit out your home office.
            </Text>
          </Box>
          <Box>
            <Heading size2 bold lh_2 mb_1>
              Free books
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              Unlimited free books whenever you want.
            </Text>
          </Box>
        </Grid>
      </Container>
    </Section>

    <Box mt_4 mb_2>
      <DividerSection />
    </Box>

    <Section size2>
      <Container size1 bp1_size4>
        <Heading
          size3
          bp1_size4
          lh_4
          bp1_lh_5
          as="h1"
          mb_5
          bp1_mb_7
          ta_center
        >
          Hiring process
        </Heading>
        <ul style={{
          listStyle: 'none',
        }}>
          <li>
            <Flexbox ai_center mb_2>
              <Flexbox
                ai_center
                jc_center
                color_white
                bc_blue500
                fs_0
                mr_4
                style={{
                  width: '25px',
                  height: '25px',
                  color: 'white',
                  borderRadius: '50%',
                  userSelect: 'none'
                }}>
                <Text size2 bold>1</Text>
              </Flexbox>
              <Heading size2 bold as="h4">Application</Heading>
            </Flexbox>
            <Box pl_7 mb_6>
              <Text
                as="p"
                size4
                lh_3
                color_gray600
              >
                Apply via Typeform. Links below.*
              </Text>
            </Box>
          </li>
          <li>
            <Flexbox ai_center mb_2>
              <Flexbox
                ai_center
                jc_center
                color_white
                bc_blue500
                fs_0
                mr_4
                style={{
                  width: '25px',
                  height: '25px',
                  color: 'white',
                  borderRadius: '50%',
                  userSelect: 'none'
                }}>
                <Text size2 bold>2</Text>
              </Flexbox>
              <Heading size2 bold as="h4">Challenge</Heading>
            </Flexbox>
            <Box pl_7 mb_6>
              <Text
                as="p"
                size4
                lh_2
                color_gray600
              >
                A series of short technical challenges. 10-45 mins each.
              </Text>
            </Box>
          </li>
          <li>
            <Flexbox ai_center mb_2>
              <Flexbox
                ai_center
                jc_center
                color_white
                bc_blue500
                fs_0
                mr_4
                style={{
                  width: '25px',
                  height: '25px',
                  color: 'white',
                  borderRadius: '50%',
                  userSelect: 'none'
                }}>
                <Text size2 bold>3</Text>
              </Flexbox>
              <Heading size2 bold as="h4">Interview</Heading>
            </Flexbox>
            <Box pl_7 mb_6>
              <Text
                as="p"
                size4
                lh_2
                color_gray600
              >
                A 60 min technical interview with either Stephen or Colm to dive into the technical skills required for the role.
              </Text>
            </Box>
          </li>
          <li>
            <Flexbox ai_center mb_2>
              <Flexbox
                ai_center
                jc_center
                color_white
                bc_blue500
                fs_0
                mr_4
                style={{
                  width: '25px',
                  height: '25px',
                  color: 'white',
                  borderRadius: '50%',
                  userSelect: 'none'
                }}>
                <Text size2 bold>4</Text>
              </Flexbox>
              <Heading size2 bold as="h4">Chat</Heading>
            </Flexbox>
            <Box pl_7 mb_6>
              <Text
                as="p"
                size4
                lh_2
                color_gray600
              >
                60 min video call to chat more about us, you, design tools, design systems, the weather, Bird Box etc.
              </Text>
            </Box>
          </li>
          <li>
            <Flexbox ai_center mb_2>
              <Flexbox
                ai_center
                jc_center
                color_white
                bc_blue500
                fs_0
                mr_4
                style={{
                  width: '25px',
                  height: '25px',
                  color: 'white',
                  borderRadius: '50%',
                  userSelect: 'none'
                }}>
                <Text size2 bold>5</Text>
              </Flexbox>
              <Heading size2 bold as="h4">Offer</Heading>
            </Flexbox>
            <Box pl_7>
              <Text
                as="p"
                size4
                lh_2
                color_gray600
              >
                If we're both still interested, we'll send an offer. You then have a chance to chat with others on the team.
              </Text>
            </Box>
          </li>
        </ul>
        <Text size2 lh_1 color_gray600 mt_6>
          * All applicants will receive an email about next steps within 5 days. We're aiming to finish all steps within 4 weeks.
        </Text>
      </Container>
    </Section>

    <Section size2>
      <Container size1 bp1_size4>
        <Heading
          size3
          bp1_size4
          lh_4
          bp1_lh_5
          as="h1"
          mb_5
          bp1_mb_7
          ta_center
        >
          Open roles
        </Heading>

        <Box mt_8>
          <Text
            as="p"
            size4
            lh_2
            mb_4
          >
            We're not currently hiring for any roles. We will hopefully be hiring again in 6-12 months.
          </Text>
        </Box>

      </Container>
    </Section>

    <Box mt_4 mb_9>
      <DividerSection />
    </Box>
    <Footer />
  </Layout>
)

export default CareersPage
