import React from 'react'
import { Link } from 'gatsby'

import {
  Section,
  Container,
  Box,
  Flexbox,
  Heading,
  Text,
  Avatar,
  HoverZone,
  HoverZonePanel
} from 'radix-ds';

import Tweet from './Tweet'
import Card from './Card'

const Tweets = (props) => (
  <Section
    size2
    bp1_size3
  >
    <Container size3>
      <Heading
        size5
        lh_5
        bold
        mb_3
        as="h5"
        ta_center
      >
        Tweets
      </Heading>
      <Text
        size5
        lh_3
        color_gray600
        mb_6
        bp1_mb_7
        ta_center
      >
       A collection of tweets from the community which provide more insight into what we're working on.
      </Text>
    </Container>
    <Container>
      <Flexbox fd_column bp1_fd_row ai_flexstart>
        <Box fg_1 fb_0 mt_4 ml_4>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      We need to stop chasing 'pixel-perfection'.
                    </Text>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      Even the most 'pixel-perfect' mockup is just a hint at what a UI might look like in one state, at one screen size, in one browser, on one device, with one set of data.
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      Instead, embrace the dynamic, fluid nature of the target medium.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                    >
                      Data is full of entropy, designing without it optimizes for one of many possible outcomes.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      The vast majority of people in the design tools space are trying to make illustration tools more powerful. This is a dead-end. The output is capped and there is no way around it.
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      I'm focused on making code editors more accessible.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                    >
                      I can't tell you how many teams I've worked with where designers shovel work onto devs with the expectation devs will just build things as-is (nevermind if styles are inconsistent with existing work). Tools like Zeplin exacerbate this problem. It's critical for devs to be equals.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                    >
                      But the problem isn’t designers and their tools, the problem is not having all the right people in the room. Whilst there is value in all these prototyping tools, the idea of “developer hand-off” features needs to slink off into the night.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

        </Box>

        <Box fg_1 fb_0 mt_4 ml_4>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                    >
                      Man, coding is hard. There needs to be easier ways of bringing designs to life. We need to work on that instead of making it easier to draw pictures.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      There are two aspects to programmatic prototyping:
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      1. Real animations and transitions (ie. "it looks like the real thing").
                    </Text>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      2. Real states based on actual data and logic operations (ie. "it works like the real thing").
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      I feel like people focus on #1, when #2 is where the value is.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                    Bottom line: the Web is chaos. We should embrace it a little instead of stressing over every pixel.
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      This is partially why I’ve been designing in the browser for a long time now.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                    >
                      Vector graphics are physically incapable of holding the kind of information necessary to inform the design of a digital product.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                    >
                      Illustration tools can't be the source of truth for code. It might demo well with simple examples, but long term it's a dead end.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      The problem everyone is trying to crack around making design tools is the wrong problem.
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      Splitting design and engineering into two separate environments is a mistake.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

        </Box>

        <Box fg_1 fb_0 mt_4 ml_4>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                    We'll soon build apps mostly with UI and AI and you can only:
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      1. Deal with it
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      2. Deal with it
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      Hey designers!
                    </Text>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      It's important to know your medium.
                    </Text>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      Learning code, tech restraints, native defaults & browser quirks is the modern-day equivalent to hand-setting type, dark room film developing, drawing & painting.
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      It sets a good foundation for strong craft execution.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      The future of design tools has never been about getting design closer to code.
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      It's about getting design closer to reality: code is one part, user empathy the other. We must design and build with lag, noise, and other real-world scenarios in mind.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

          <Box mb_4>
            <HoverZone>
              <Card
                href="https://www.medium.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Flexbox height_100 fd_column jc_spacebetween>
                  <Box>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      Another day, another handoff feature.
                    </Text>
                    <Text
                      size4
                      lh_2
                      mb_4
                    >
                      Inspecting an illustration to extract styles, measurements and code, assumes the illustration is an accurate representation of the end product.
                    </Text>
                    <Text
                      size4
                      lh_2
                    >
                      Illustrations cannot accurately represent digital products.
                    </Text>
                  </Box>
                  <Flexbox
                    ai_center
                    mt_4
                    jc_spacebetween
                  >
                    <Box>
                      <Flexbox
                        ai_center
                      >
                        <Box mr_2>
                          <Avatar
                            size2
                            url="https://pbs.twimg.com/profile_images/864164353771229187/Catw6Nmh_bigger.jpg"
                            caption="Colm Tuite"
                            initial="C"
                          />
                        </Box>
                        <Text
                          size2
                          color_gray600
                        >
                          Colm Tuite
                        </Text>
                      </Flexbox>
                    </Box>
                    <Flexbox ai_center position_relative>
                      <Text
                        size2
                        color_gray600
                      >
                        {props.date}
                      </Text>
                      <HoverZonePanel>
                        <Flexbox ai_center jc_flexend width_100 height_100 bc_white position_absolute style={{top: '0',right: '0'}}>
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
          </Box>

        </Box>

      </Flexbox>
    </Container>

  </Section>
)

export default Tweets
