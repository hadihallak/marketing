import React from 'react'
import styled from 'styled-components';

import {
  Flexbox,
  Box,
  AspectRatio,
  Text,
  GhostButton,
  Avatar,
  PillTab,
  Button,
  List,
  Theme
} from 'radix-ds';

import ComposerToolbelt from './ComposerToolbelt'
import ComposerLayerTree from './ComposerLayerTree'
import ComposerPreview from './ComposerPreview'
import ComposerProperties from './ComposerProperties'
import States from './States'

import PropHeader from './PropHeader'
import PropNode from './PropNode'

const Figure = styled.figure`
  width: 900px;
  pointer-events: none;

  @media screen and (min-width: ${Theme.BREAKPOINT_200}) {
    width: auto;
  }
`;

const Browser = styled.div`
  background-color: white;
  box-shadow: 0px 60px 123px -25px hsla(208,29%,12%,.42),0px 35px 75px -35px hsla(208,24%,10%,.08);
  border-radius: ${Theme.BORDERRADIUS_200};
  border: 1px solid ${Theme.GRAY_400};
  border-bottom-color: ${Theme.GRAY_500};
  height: 100%;
  transform: scale(.75);
  transform-origin: top left;

  @media screen and (min-width: ${Theme.BREAKPOINT_100}) {
    transform: scale(1);
  }

  @media screen and (min-width: ${Theme.BREAKPOINT_200}) {
    transform: perspective(70em) rotateX(26deg) rotateY(0) rotateZ(0) translateX(0);
    margin-top: -190px;
    transform-origin: bottom center;
  }
`;

const ComposerScreen = () => (
  <Figure
     aria-hidden="true"
  >
    <AspectRatio ratio_169>
      <Browser>
        <Flexbox
          height_100
        >
          <Box fs_0 br bcgray400 style={{width: '225px'}}>
            <Flexbox
              height_100
              fd_column
            >
              <Box padding_1 bb bcgray400>
                <Flexbox
                  jc_spacebetween
                >
                  <GhostButton size2 tabIndex="-1">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M4 18.5H21"/>
                      <path d="M4 12.5H21"/>
                      <path d="M4 6.5H21"/>
                    </svg>
                  </GhostButton>
                </Flexbox>
              </Box>
              <Box overflow_hidden>
                <Box>
                  <List mt_1 mb_1>
                    <li>
                      <PropNode label="Button" active />
                    </li>
                  </List>
                </Box>
                <Box
                  bt
                  bcgray300
                >
                  <PropHeader label="Size" />
                  <List mt_1 mb_1>
                    <li>
                      <PropNode label="Size 1" />
                    </li>
                    <li>
                      <PropNode label="Size 2" />
                    </li>
                  </List>
                </Box>
                <Box
                  bt
                  bcgray300
                >
                  <PropHeader label="Color" />
                  <List mt_1 mb_1>
                    <li>
                      <PropNode label="Gray" />
                    </li>
                    <li>
                      <PropNode label="Blue" />
                    </li>
                    <li>
                      <PropNode label="Green" />
                    </li>
                    <li>
                      <PropNode label="Red" />
                    </li>
                  </List>
                </Box>
                <Box
                  bt
                  bcgray300
                >
                  <PropHeader label="Alignment" />
                  <List mt_1 mb_1>
                    <li>
                      <PropNode label="Left" />
                    </li>
                    <li>
                      <PropNode label="Middle" />
                    </li>
                    <li>
                      <PropNode label="Right" />
                    </li>
                  </List>
                </Box>
                <Box
                  bt
                  bcgray300
                >
                  <List mt_1 mb_1>
                    <li>
                      <PropNode label="Active" />
                    </li>
                  </List>
                </Box>
                <Box
                  bt
                  bcgray300
                >
                  <List mt_1 mb_1>
                    <li>
                      <PropNode label="Waiting" />
                    </li>
                  </List>
                </Box>
                <Box
                  bt
                  bcgray300
                >
                  <List mt_1 mb_1>
                    <li>
                      <PropNode label="Disabled" />
                    </li>
                  </List>
                </Box>
              </Box>
            </Flexbox>
          </Box>




          
          
          
          
          <Box fs_0 bl bcgray400 style={{width: '225px'}}>
            <Flexbox
              height_100
              fd_column
            >
              <Box padding_1
                pr_2
                bb
                bcgray400
              >
                <Flexbox ai_center jc_flexend>
                  <GhostButton size2 tabIndex="-1">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                    <circle cx="12.5" cy="12.5" r="3"/>
                    <circle cx="12.5" cy="12.5" r="8"/>
                    <path d="M6.5 18.5L10.5 14.5"/>
                    <path d="M14.5 10.5L18.5 6.5"/>
                    <path d="M10.5 10.5L6.5 6.5"/>
                    <path d="M18 18L14.5 14.5"/>
                    </svg>
                  </GhostButton>
                  <GhostButton size2 tabIndex="-1">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9.55001 18.5H15.45C15.2184 19.6411 14.2095 20.5 13 20.5H12C10.7905 20.5 9.78164 19.6411 9.55001 18.5Z"/>
                      <path d="M5.5 15V18.5H19.5V15L17.1667 13.5V10C17.1667 10 17.5 4.5 12.5 4.5C7.5 4.5 7.83333 10 7.83333 10V13.5L5.5 15Z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </GhostButton>
                  <Box pl_2>
                    <Avatar size2 url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"/>
                  </Box>
                </Flexbox>
              </Box>
              <States />
              <ComposerProperties />
            </Flexbox>
          </Box>
        </Flexbox>
      </Browser>
    </AspectRatio>
  </Figure>
)

export default ComposerScreen
