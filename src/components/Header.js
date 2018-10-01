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

import FadeLinkNotGatsby from './FadeLinkNotGatsby'

const Header = () => (
  <Section size1>
    <Container>
      <Flexbox
        ai_flexstart
        jc_spacebetween
      >
        <Box>
          <Link
            to="/"
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
              href="https://spectrum.chat/modulz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Text size3>
                Kickstarter
              </Text>
            </FadeLinkNotGatsby>
            <Box ml_6 mr_6>
              <Divider vertical size1 />
            </Box>
            <Link
              to="/about"
            >
              <Text size3>
                About
              </Text>
            </Link>
          </Flexbox>
        </nav>
      </Flexbox>
    </Container>
  </Section>
)

export default Header
