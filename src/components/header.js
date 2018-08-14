import React from 'react'
import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Text } from 'radix-ds';

import FadeLink from './FadeLink'

const Header = () => (
  <Section
    size1
    style={{
      position: 'absolute',
      width: '100%',
    }}
  >
    <Container
    >
      <Flexbox
        ai_baseline
        jc_spacebetween
      >
        <Box>
          <Text
            size1
            gray500
          >
            &copy; Modulz
          </Text>
        </Box>
        <nav>
          <Flexbox>
            <Box>
              <FadeLink
                to="https://www.twitter.com/modulz"
                size2
                left
                data-content="Product"
                target="_blank"
              >
                Product
                <Box
                  ml1
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    stroke="currentColor"
                    style={{
                      display: 'block'
                    }}
                  >
                    <path d="M0 0H10" transform="translate(2.5 7.5)" stroke-linecap="round"/>
                    <path d="M0 10V0" transform="translate(7.5 2.5)" stroke-linecap="round"/>
                  </svg>
                </Box>
              </FadeLink>
            </Box>
            <Box
              ml5
            >
              <FadeLink
                to="/https://spectrum.chat/modulz"
                size2
                right
                data-content="Join our community"
                target="_blank"
              >
                Why Modulz
              </FadeLink>
            </Box>
            <Box
              ml5
            >
              <FadeLink
                to="/https://spectrum.chat/modulz"
                size2
                right
                data-content="Join our community"
                target="_blank"
              >
                About
              </FadeLink>
            </Box>
          </Flexbox>
        </nav>
      </Flexbox>
    </Container>
  </Section>
)

export default Header
