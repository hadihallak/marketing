import React from 'react'

import {
  Section,
  Container,
  Box,
  Flexbox,
  Text,
  Avatar
} from 'radix-ds';

import SmallTestimonial from './SmallTestimonial'
import LargeTestimonial from './LargeTestimonial'

import MikeAvatar from "./../assets/mike-avatar.png"
import TonyAvatar from "./../assets/tony-avatar.jpg"
import JackAvatar from "./../assets/jack-avatar.jpg"
import JinaAvatar from "./../assets/jina-avatar.png"
import SteveAvatar from "./../assets/steve-avatar.jpg"

const WallOfLove = () => (
  <Section
    size2
    bp1_size3
  >
    <Container
      size2
    >
      <Flexbox fd_column bp1_fd_row mb_6>
        <Box fg_1 fb_0 mb_6 bp1_mb_0 bp1_mr_2 bp2_mr_8>
          <Box
            ta_center
          >
            <Flexbox jc_center mb_4>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="hsl(208, 12%, 46%)"
              >
                <path d="M0.5 25V7C0.5 6.72386 0.723857 6.5 1 6.5H20C20.2761 6.5 20.5 6.72386 20.5 7V25.5L15.5 38.5H4.5L9.5 25.5H1C0.723858 25.5 0.5 25.2761 0.5 25Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.5 25V7C24.5 6.72386 24.7239 6.5 25 6.5H44C44.2761 6.5 44.5 6.72386 44.5 7V25.5L39.5 38.5H28.5L33.5 25.5H25C24.7239 25.5 24.5 25.2761 24.5 25Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Flexbox>
            <blockquote cite="">
              <Text
                size4
                bp2_size6
                lh_3
                bp2_lh_4
                as="p"
              >
                "Modulz is one of the most exciting design tools I’ve seen. This could revolutionize design workflows."
              </Text>
              <Flexbox
                ai_center
                jc_center
                mt_5
              >
                <Box
                  mr_3
                >
                  <Avatar
                    size3
                    url={MikeAvatar}
                    caption="Michael Dick"
                    initial="M"
                  />
                </Box>
                <Text
                  size3
                  color_gray600
                >
                  Michael Dick
                </Text>
              </Flexbox>
            </blockquote>
          </Box>
        </Box>
        <Box fg_1 fb_0 bp1_ml_8>
          <SmallTestimonial
            quote='"Of all these new UI design tools coming out, I think Modulz looks the most promising. Excited to give it a try."'
            author="Steve Schoger"
            initial="S"
            url="https://twitter.com/steveschoger/status/965589237109264385"
            avatar={SteveAvatar}
          />
        </Box>
      </Flexbox>
    </Container>
    <Container
      size3
    >
      <LargeTestimonial
        quote='"It’s exciting to watch a small group of people working on an idea which will fundamentally change a discipline."'
        author="Tony Ennis"
        initial="T"
        url="https://twitter.com/tonyennis/status/960067570987556864"
        avatar={TonyAvatar}
      />
    </Container>
    <Container
      size2
    >
      <Flexbox fd_column bp1_fd_row mt_6>
        <Box fg_1 fb_0 mb_6 bp1_mb_0 bp1_mr_2 bp2_mr_8>
          <Box
            ta_center
          >
            <Flexbox jc_center mb_4>
              <svg
                width="45"
                height="45"
                viewBox="0 0 45 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                stroke="hsl(208, 12%, 46%)"
              >
                <path d="M0.5 25V7C0.5 6.72386 0.723857 6.5 1 6.5H20C20.2761 6.5 20.5 6.72386 20.5 7V25.5L15.5 38.5H4.5L9.5 25.5H1C0.723858 25.5 0.5 25.2761 0.5 25Z" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M24.5 25V7C24.5 6.72386 24.7239 6.5 25 6.5H44C44.2761 6.5 44.5 6.72386 44.5 7V25.5L39.5 38.5H28.5L33.5 25.5H25C24.7239 25.5 24.5 25.2761 24.5 25Z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Flexbox>
            <blockquote cite="">
              <Text
                size4
                bp2_size6
                lh_3
                bp2_lh_4
                as="p"
              >
                "I can’t wait to try Modulz.
                <br />
                It looks so cool!"
              </Text>
              <Flexbox
                ai_center
                jc_center
                mt_5
              >
                <Box
                  mr_3
                >
                  <Avatar
                    size3
                    url={JinaAvatar}
                    caption="Jina-Anne"
                    initial="J"
                  />
                </Box>
                <Text
                  size3
                  color_gray600
                >
                  Jina-Anne
                </Text>
              </Flexbox>
            </blockquote>
          </Box>
        </Box>
        <Box fg_1 fb_0 bp1_ml_8>
          <SmallTestimonial
            quote='"Empowering designers to iterate on the *actual* product they are working on—this is the future of our industry"'
            author="Jack Lo Russo"
            initial="J"
            url="htts://www.twitter.com/modulz"
            avatar={JackAvatar}
          />
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

// "It’s exciting to watch a small group of people working on an idea which will fundamentally change a discipline."
// This is going to be pretty sweet I think 👍🏻 a design tool that fully embraces the fact that it's helping you work with HTML and CSS. - Adam Wathan
// Any tool that reduces friction in getting prototypes in front of customers and stakeholders is a winner, but Modulz promises even more. Empowering designers to iterate on the *actual* product they're working on, not just pictures of it — this is the future of our industry. - Jack Lo Russo
// Our workflows as digital designers don't quite fit with traditional tooling. Terribly excited to see how Modulz redefines how we think about designing for screens. - Adam Morse
// "Whatever @colmtuite and his class of shameless Front End Design pals don’t stand to make money on/are not good at, is by definition totally unnecessary and actually an evil to be purged and eliminated from the design industry."'
// "This is one of those things, that upon first viewing, makes one question why it hasn't existed before."'

// Modulz is full of interesting ideas. Can't wait to try it out. - Koen Bok

export default WallOfLove
