import React from 'react'
import { Link } from 'gatsby'

import { Box } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Text } from 'radix-ds';

const LargeTestimonial = (props) => (
  <Box
    pt7
    pl8
    style={{
      borderColor: 'hsl(208,22%,15%)',
      position: 'relative',
      zIndex: '1',
    }}
  >
    <Box
      style={{
        position: 'absolute',
        color: 'hsl(208,18%,24%)',
        top: '0',
        left: '0',
        zIndex: '-1',
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="105"
        height="105"
        viewBox="0 0 95 95"
        fill="none"
        stroke="currentColor"
        style={{
          display: 'block'
        }}
      >
        <path d="M7.5 53.5V16.5H44.5V53.5L33.5 78H13L23 53.5H7.5Z"/>
        <path d="M50.5 53.5V16.5H87.5V53.5L76.5 78H56L66 53.5H50.5Z"/>
      </svg>
    </Box>
    <Text
      size6
      lh5
    >
      {props.quote}
    </Text>
    <Flexbox
      ai_center
      mt4
    >
      <Box
        mr4
        style={{
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          width="45"
          height="45"
          src="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
        />
      </Box>
      <Text
        size2
        gray600
      >
        Tony Ennis
      </Text>
      <Link
        to="/composer"
        style={{
          textDecoration: 'none',
          color: 'inherit',
        }}
      >
      </Link>
    </Flexbox>
  </Box>
)

export default LargeTestimonial
