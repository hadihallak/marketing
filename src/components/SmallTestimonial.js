import React from 'react'
import { Link } from 'gatsby'

import {
  Box,
  Flexbox,
  Text,
  Avatar
} from 'radix-ds';

const SmallTestimonial = (props) => (
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
        size6
        lh_4
        as="p"
        color_gray600
        style={{letterSpacing: '-.018em'}}
      >
        {props.quote}
      </Text>
      <Flexbox
        ai_center
        bp2_jc_center
        mt_5
      >
        <Box
          mr_3
        >
        <Avatar
          size3
          url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
        />
        </Box>
        <Text
          size3
          color_gray600
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
    </blockquote>
  </Box>
)

export default SmallTestimonial
