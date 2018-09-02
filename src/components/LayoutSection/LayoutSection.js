import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';
import { Button } from 'radix-ds';
import { Select } from 'radix-ds';
import { Tooltip } from 'radix-ds';

import LayoutPhone from './LayoutPhone'
import LayoutSectionSliderButton from './LayoutSectionSliderButton'
import InfoSlide from './InfoSlide'

const LayoutSection = () => (
  <Section
    size3
    gray200
  >
    <Container
      size3
    >
      <Flexbox
        ai_center
        jc_center
      >
        <Box
          relative
          mr9
        >
          <Flexbox>
            <InfoSlide
              active
              heading="Flexbox"
              blurb="With Modulz you're in complete control of your layout. Tweak the direction, distribution, alignment or wrapping behaviour. You can even reverse a layout with one click!"
            />
            <InfoSlide
              absolute
              heading="Spacing"
              blurb="Use margin to push surrounding elements away. Use padding to add space inside elements."
            />
            <InfoSlide
              absolute
              heading="Pinning"
              blurb="Pin elements to either the artboard or a parent element. Achieve effects like sticky app bars."
            />
            <InfoSlide
              absolute
              heading="Scroll areas"
              blurb="Set up horizontal or vertical scroll areas which function natively."
            />
          </Flexbox>
          <Flexbox
            mt7
          >
            <Box
              mr2
            >
              <Tooltip
                data-tooltip="Flexbox"
                data-position="bottom"
              >
                <LayoutSectionSliderButton />
              </Tooltip>
            </Box>
            <Box
              mr2
            >
              <Tooltip
                data-tooltip="Spacing"
                data-position="bottom"
              >
                <LayoutSectionSliderButton />
              </Tooltip>
            </Box>
            <Box
              mr2
            >
              <Tooltip
                data-tooltip="Pinning"
                data-position="bottom"
              >
                <LayoutSectionSliderButton />
              </Tooltip>
            </Box>
            <Box
              mr2
            >
              <Tooltip
                data-tooltip="Flexbox"
                data-position="bottom"
              >
                <LayoutSectionSliderButton />
              </Tooltip>
            </Box>
          </Flexbox>
        </Box>
        <LayoutPhone />
      </Flexbox>
    </Container>
  </Section>
)

export default LayoutSection
