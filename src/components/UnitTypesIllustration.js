import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';
import { Input } from 'radix-ds';
import { Button } from 'radix-ds';
import { Select } from 'radix-ds';

import StatesButton from './StatesButton';
import StatesInput from './StatesInput';
import StatesRadio from './StatesRadio';
import StatesCheckbox from './StatesCheckbox';
import StatesIcon from './StatesIcon';
import StatesSlider from './StatesSlider';

const UnitTypesIllustration = () => (
  <Flexbox
    jc_flexend
    mb9
    >
      <Box
        fg_1
        height_100
        style={{
          background: 'linear-gradient(to left, hsl(208,40%,99%) 0%, hsla(208, 30%, 99%, 0.738) 19%, hsla(208, 30%, 99%, 0.541) 34%, hsla(208, 30%, 99%, 0.382) 47%, hsla(208, 30%, 99%, 0.278) 56.5%, hsla(208, 30%, 99%, 0.194) 65%, hsla(208, 30%, 99%, 0.126) 73%, hsla(208, 30%, 99%, 0.075) 80.2%, hsla(208, 30%, 99%, 0.042) 86.1%, hsla(208, 30%, 99%, 0.021) 91%, hsla(208, 30%, 99%, 0.008) 95.2%, hsla(208, 30%, 99%, 0.002) 98.2%, transparent 100%)',
          height: '130px',
        }}
        >
      </Box>
      <Box
        gray100
        bt
        br
        bl
        bcgray300
        p3
        fs_0
        style={{
          width: '220px',
        }}
      >
        <Box
          table
          w100
        >
          <Box
            tablerow
          >
            <Box
              tablecell
              pr_4
              alignmiddle
            >
              <Text
                size1
                gray600
                nowrap
              >
                Width
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
            >
              <Input
                defaultValue="Auto"
              />
            </Box>
          </Box>
          <Box pt2></Box>
          <Box
            tablerow
          >
            <Box
              tablecell
              pr_4
              alignmiddle
            >
              <Text
                size1
                gray600
                nowrap
              >
                Height
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
            >
              <Input
                defaultValue="48"
              />
            </Box>
          </Box>
          <Box pt2></Box>
          <Box
            tablerow
          >
            <Box
              tablecell
              pr_4
              alignmiddle
            >
              <Text
                size1
                gray600
                nowrap
              >
                Min width
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
            >
              <Input
                defaultValue="48"
              />
            </Box>
          </Box>
          <Box pt2></Box>
          <Box
            tablerow
          >
            <Box
              tablecell
              pr_4
              alignmiddle
            >
              <Text
                size1
                gray600
                nowrap
              >
                Min height
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
            >
              <Input
                defaultValue="Auto"
              />
            </Box>
          </Box>
          <Box pt2></Box>
          <Box
            tablerow
          >
            <Box
              tablecell
              pr_4
              alignmiddle
            >
              <Text
                size1
                gray600
                nowrap
              >
                Max width
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
              w100
              style={{
                position: 'relative'
              }}
            >
              <Input
                defaultValue="100"
              />
              <Box
                white
                pt1
                pb1
                style={{
                  position: 'absolute',
                  top: '-6px',
                  left: '0',
                  boxShadow: '0 15px 35px hsla(208,30%,10%,.05)',
                  borderRadius: '.1875rem',
                  zIndex: '1',
                  userSelect: 'none',
                }}
              >
                <Flexbox
                  ai_center
                  pl_2
                  pr_2
                  style={{
                    height: '25px',
                  }}
                >
                  <Box
                    mr2
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: 'block',
                        opacity: '0'
                      }}
                    >
                      <path d="M10 0L4 8L0 5" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Text
                    size1
                  >
                    px
                  </Text>
                </Flexbox>
                <Flexbox
                  ai_center
                  pl_2
                  pr_2
                  blue500
                  style={{
                    height: '25px',
                    color: 'white',
                  }}
                >
                  <Box
                    mr2
                  >
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block'}}>
                      <path d="M10 0L4 8L0 5" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Text
                    size1
                  >
                    %
                  </Text>
                </Flexbox>
                <Flexbox
                  ai_center
                  pl_2
                  pr_2
                  style={{
                    height: '25px',
                  }}
                >
                  <Box
                    mr2
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: 'block',
                        opacity: '0'
                      }}
                    >
                      <path d="M10 0L4 8L0 5" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Text
                    size1
                  >
                    vw
                  </Text>
                </Flexbox>
                <Flexbox
                  ai_center
                  pl_2
                  pr_2
                  style={{
                    height: '25px',
                  }}
                >
                  <Box
                    mr2
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: 'block',
                        opacity: '0'
                      }}
                    >
                      <path d="M10 0L4 8L0 5" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Text
                    size1
                  >
                    vh
                  </Text>
                </Flexbox>
                <Flexbox
                  ai_center
                  pl_2
                  pr_2
                  style={{
                    height: '25px',
                  }}
                >
                  <Box
                    mr2
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: 'block',
                        opacity: '0'
                      }}
                    >
                      <path d="M10 0L4 8L0 5" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Text
                    size1
                  >
                    math
                  </Text>
                </Flexbox>
                <Flexbox
                  ai_center
                  pl_2
                  pr_2
                  style={{
                    height: '25px',
                  }}
                >
                  <Box
                    mr2
                  >
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 15 15"
                      fill="none"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        display: 'block',
                        opacity: '0'
                      }}
                    >
                      <path d="M10 0L4 8L0 5" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Text
                    size1
                  >
                    auto
                  </Text>
                </Flexbox>
              </Box>
            </Box>
          </Box>
          <Box pt2></Box>
          <Box
            tablerow
          >
            <Box
              tablecell
              pr_4
              alignmiddle
            >
              <Text
                size1
                gray600
                nowrap
              >
                Max height
              </Text>
            </Box>
            <Box
              tablecell
              alignmiddle
            >
              <Input
                defaultValue="Auto"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Flexbox>

)

export default UnitTypesIllustration
