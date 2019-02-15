import React from 'react'
import styled from 'styled-components';
import { Link } from 'gatsby'

import {
  Section,
  Container,
  Flexbox,
  Box,
  Text,
  Divider
} from 'radix-ds';

import FadeLink from './FadeLink'
import FadeLinkNotGatsby from './FadeLinkNotGatsby'

const Header = () => (
  <Section size1>
    <Container size1>
      <Flexbox
        ai_flexstart
        jc_spacebetween
      >
        <Box>
          <Link
            to="/"
            aria-label="Back to homepage"
            style={{
              color: 'inherit',
            }}
          >
            <svg
              width="35"
              height="35"
              viewBox="0 0 35 35"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 26.5L4 31V22L10 26.5Z"/>
              <path d="M10 14.5L4 19V10L10 14.5Z"/>
              <path d="M17 8.5L11 13V4L17 8.5Z"/>
              <path d="M24 14.5L18 19V10L24 14.5Z"/>
              <path d="M31 8.5L25 13V4L31 8.5Z"/>
              <path d="M31 20.5L25 25V16L31 20.5Z"/>
              <path d="M10 25L4 20.5L10 16V25Z"/>
              <path d="M17 19L11 14.5L17 10V19Z"/>
              <path d="M10 13L4 8.5L10 4V13Z"/>
              <path d="M24 13L18 8.5L24 4V13Z"/>
              <path d="M31 19L25 14.5L31 10V19Z"/>
              <path d="M31 31L25 26.5L31 22V31Z"/>
            </svg>
          </Link>
        </Box>
        <nav>
          <Flexbox ai_center>
            <FadeLinkNotGatsby
              href="https://www.kickstarter.com/projects/stephenhaney/modulzthe-next-step-in-visual-coding"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text size3>
                Kickstarter
              </Text>
              <Box ml_1>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="hsl(208, 12%, 46%)"
                >
                  <path d="M9.5 2.5H12.5V5.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M6.5 8.5L12.5 2.5" strokeLinecap="round"/>
                  <path d="M10.5 9.07143V12C10.5 12.2761 10.2761 12.5 10 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12V5C2.5 4.72386 2.72386 4.5 3 4.5H5.92857" strokeLinecap="round"/>
                </svg>
              </Box>
            </FadeLinkNotGatsby>
            <Box ml_5 mr_5>
              <Divider vertical size1 />
            </Box>
            <Box mr_5>
              <FadeLink
                to="/about"
                data-content="About"
              >
                About
              </FadeLink>
            </Box>
            <FadeLink
              to="/careers"
              data-content="Careers"
            >
              Careers
            </FadeLink>
            <FadeLinkNotGatsby
              href="/login"
              target="_blank"
              data-content="login"
              rel="noopener noreferrer"
            >
            
            </FadeLinkNotGatsby>
          </Flexbox>
        </nav>
      </Flexbox>
    </Container>
  </Section>
)

export default Header
