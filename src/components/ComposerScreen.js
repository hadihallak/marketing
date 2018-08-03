import React from 'react'

import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { AspectRatio } from 'radix-ds';
import { Text } from 'radix-ds';

const ComposerScreen = () => (
  <AspectRatio>
    <Box
      gray100
      border
      h100
      bcgray400
      style={{
        transform: 'perspective(65em) rotateX(30deg)',
        transformOrigin: 'bottom center',
        boxShadow: 'rgba(16, 23, 30, 0.05) -70px 58px 60px 0px, rgba(16, 23, 30, 0.05) 0px 80px 190px 0px',
        borderRadius: '5px',
      }}
    >
      <Flexbox
        h100
      >
        <Box
          br
          bcgray300
          fs0
          pl1
          pr1
          style={{
            width: '35px',
          }}
        >
          <Box>
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
              <rect x="0.5" y="0.5" width="14" height="14" rx="1.5" transform="translate(5 5)" stroke="black"/>
            </svg>
          </Box>
          <Box>
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
              <path d="M0 0H14" transform="translate(5.5 12.5)" stroke-linecap="round"/>
              <path d="M0 14V0" transform="translate(12.5 5.5)" stroke-linecap="round"/>
            </svg>
          </Box>
          <Box>
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
              <path d="M0 0H14" transform="translate(5.5 12.5)" stroke-linecap="round"/>
              <path d="M0 14V0" transform="translate(12.5 5.5)" stroke-linecap="round"/>
            </svg>
          </Box>
          <Box>
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
              <path d="M0 0H14" transform="translate(5.5 12.5)" stroke-linecap="round"/>
              <path d="M0 14V0" transform="translate(12.5 5.5)" stroke-linecap="round"/>
            </svg>
          </Box>
        </Box>
        <Box
          br
          bcgray300
          fs0
          style={{
            width: '20%',
          }}
        >
          <Box
            p3
            style={{
              height: '30px',
            }}
          >
            <Flexbox
              ai_center
            >
              <Box
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
                  }}>
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </Box>
              <Box
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
                  }}>
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </Box>
              <Box>
                <Text
                  size2
                >
                  Div
                </Text>
              </Box>
            </Flexbox>
          </Box>
          <Box
            p3
            style={{
              height: '30px',
            }}
          >
            <Flexbox
              ai_center
            >
              <Box
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
                  }}>
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </Box>
              <Box
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
                  }}>
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </Box>
              <Box>
                <Text
                  size2
                >
                  Button
                </Text>
              </Box>
            </Flexbox>
          </Box>
        </Box>
        <Box
          p3
          fg1
          style={{
            overflow: 'auto'
          }}
        >
          <Flexbox
            h100
            ai_flexStart
          >
            <Box
              border
              bcgray300
              white
              mr2
              fs0
              style={{
                width: '320px',
                minHeight: '568px',
                maxHeight: '100%',
              }}
            >
            </Box>
            <Box
              border
              bcgray300
              white
              mr2
              fs0
              style={{
                width: '375px',
                minHeight: '667px',
                maxHeight: '100%',
              }}
            >
            </Box>
            <Box
              border
              bcgray300
              white
              mr2
              fs0
              style={{
                width: '375px',
                minHeight: '812px',
                maxHeight: '100%',
              }}
            >
            </Box>
          </Flexbox>
        </Box>
        <Box
          p3
          bl
          bcgray300
          fs0
          style={{
            width: '20%',
          }}
        >
          <Box
            p3
            style={{
              height: '30px',
            }}
          >
            <Flexbox
              ai_center
            >
              <Box
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
                  }}>
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </Box>
              <Box
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
                  }}>
                  <path d="M7 10C4 10 1.5 8 0 5.00002C1.5 2 4 0 7 0C10 0 12.5 2 14 5.00001C12.5 8 10 10 7 10Z" transform="translate(0.5 2.5)" stroke-linecap="round" stroke-linejoin="round"/>
                  <circle cx="2.5" cy="2.5" r="2" transform="translate(5 5)"/>
                </svg>
              </Box>
              <Box>
                <Text
                  size2
                >
                  Button
                </Text>
              </Box>
            </Flexbox>
          </Box>
        </Box>
      </Flexbox>
    </Box>
  </AspectRatio>
)

export default ComposerScreen
