import React from 'react'
import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Text } from 'radix-ds';

import FadeLink from './FadeLink'
import LinkArrow from './LinkArrow'

const Navigation = () => (
  <Section
    size3
  >
    <Container
      size3
    >
      <Box
        mb5
        center
      >
        <FadeLink
          to="/composer"
          size2
          blue
          data-content="Check out our features"
        >
          Check out our features
          <LinkArrow
            ml1
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block'
              }}
            >
              <path d="M0 0L7 6L0 12" transform="translate(13.5 6.5)" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M0 0H16" transform="translate(4.5 12.5)" stroke-linecap="round"/>
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{
                display: 'block'
              }}
            >
              <path d="M0 0L7 6L0 12" transform="translate(13.5 6.5)" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M0 0H16" transform="translate(4.5 12.5)" stroke-linecap="round"/>
            </svg>
          </LinkArrow>
        </FadeLink>
      </Box>
      <Box
        center
      >
        <FadeLink
          to="/"
          size1
          right
          data-content="Back to homepage"
        >
          <LinkArrow
            left
            mr1
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block'
              }}
            >
              <path d="M5 0L0 4L5 8" transform="translate(2.5 3.5)" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M0 0H10" transform="translate(2.5 7.5)" stroke-linecap="round"/>
            </svg>
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              style={{
                display: 'block'
              }}
            >
              <path d="M5 0L0 4L5 8" transform="translate(2.5 3.5)" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M0 0H10" transform="translate(2.5 7.5)" stroke-linecap="round"/>
            </svg>
          </LinkArrow>
          Back to homepage
        </FadeLink>
      </Box>
    </Container>
  </Section>
)

export default Navigation
