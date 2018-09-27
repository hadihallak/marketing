import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
  Box,
  Heading,
  Text,
  Theme,
  Flexbox,
  Avatar,
  HoverZone,
  HoverZonePanel
} from 'radix-ds';

const Card = styled.a`
  display: block;
  border: 1px solid ${Theme.GRAY_400};
  border-radius: ${Theme.BORDERRADIUS_100};
  text-decoration: none;
  padding: ${Theme.SPACING_400};
  height: 100%
  transition: border-color 70ms linear;

  &:hover {
    border-color: ${Theme.GRAY_500};
  }
`;

const BlogCard = (props) => (
  <HoverZone>
    <Card
      href={props.url}
      target="_blank"
    >
      <Flexbox h100 column jc_spacebetween>
        <Box>
          <Heading
            size2
            lh2
            nmt1
            mb1
            bold
          >
            {props.heading}
          </Heading>
          <Text
            size2
            lh2
            gray600
          >
            {props.blurb}
          </Text>
        </Box>
        <Flexbox
          ai_center
          mt4
          bp2_mt9
          jc_spacebetween
        >
          <Box>
            <Flexbox
              ai_center
            >
              <Box mr2>
                <Avatar
                  size2
                  url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                />
              </Box>
              <Text
                size1
                gray600
              >
                Colm Tuite
              </Text>
            </Flexbox>
          </Box>
          <Flexbox ai_center relative>
            <Text
              size1
              gray600
            >
              {props.date}
            </Text>
            <HoverZonePanel>
              <Flexbox ai_center jc_flexend w100 h100 white absolute style={{top: '0',right: '0'}}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="hsl(208, 12%, 50%)"
                  >
                    <path d="M9.5 2.5H12.5V5.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6.5 8.5L12.5 2.5" strokeLinecap="round"/>
                    <path d="M10.5 9.07143V12C10.5 12.2761 10.2761 12.5 10 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12V5C2.5 4.72386 2.72386 4.5 3 4.5H5.92857" strokeLinecap="round"/>
                  </svg>
              </Flexbox>
            </HoverZonePanel>
          </Flexbox>
        </Flexbox>
      </Flexbox>
    </Card>
  </HoverZone>
);

export default BlogCard;