import React from 'react'
import { Link } from 'gatsby'

import {
  Box,
  Avatar,
  Flexbox,
  Text
} from 'radix-ds';

const LargeTestimonial = (props) => (
  <Box
    bp2_ta_center
  >
    <Flexbox
      bp2_jc_center
      mb_6
    >
      <svg
        width="45"
        height="45"
        viewBox="0 0 45 45"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="hsl(208, 16%, 76%)"
      >
        <path d="M4.5 25V10C4.5 9.72386 4.72386 9.5 5 9.5H20C20.2761 9.5 20.5 9.72386 20.5 10V25.5L16.5 36.5H7.5L11.5 25.5H5C4.72386 25.5 4.5 25.2761 4.5 25Z" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24.5 25V10C24.5 9.72386 24.7239 9.5 25 9.5H40C40.2761 9.5 40.5 9.72386 40.5 10V25.5L36.5 36.5H27.5L31.5 25.5H25C24.7239 25.5 24.5 25.2761 24.5 25Z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </Flexbox>
    <Text
      size8
      lh_6
    >
      {props.quote}
    </Text>
    <Flexbox
      ai_center
      bp2_jc_center
      mt_7
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
  </Box>
)

export default LargeTestimonial
