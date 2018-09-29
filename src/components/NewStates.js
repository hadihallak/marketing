import React from 'react'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';
import { Button } from 'radix-ds';
import { Select } from 'radix-ds';

import StatesButton from './StatesButton';
import StatesInput from './StatesInput';
import StatesRadio from './StatesRadio';
import StatesCheckbox from './StatesCheckbox';
import StatesIcon from './StatesIcon';
import StatesSlider from './StatesSlider';

const NewStates = () => (
  <div>
    <Section
      size3
    >
      <Container
        size3
      >
        <Flexbox
          ai_center
        >
          <Box
            pr8
          >
          <Box
            mb6
          >
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
                          size2
                          gray600
                        >
                          State
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
                        <Box
                          white
                          style={{
                            height: '35px',
                          }}
                        >
                        </Box>
                        <Box
                          white
                          pt1
                          pb1
                          style={{
                            position: 'absolute',
                            top: '-6px',
                            left: '0',
                            minWidth: '100%',
                            boxShadow: '0 15px 35px hsla(208,30%,10%,.05)',
                            borderRadius: '.1875rem',
                            zIndex: '1',
                            userSelect: 'none',
                          }}
                        >
                          <Flexbox
                            ai_center
                            pl5
                            pr7
                            style={{
                              height: '35px',
                            }}
                          >
                            <Box
                              mr5
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
                              size2
                            >
                              Default
                            </Text>
                          </Flexbox>
                          <Flexbox
                            ai_center
                            pl5
                            pr7
                            blue500
                            style={{
                              height: '35px',
                              color: 'white',
                            }}
                          >
                            <Box
                              mr5
                            >
                              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block'}}>
                                <path d="M10 0L4 8L0 5" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Box>
                            <Text
                              size2
                            >
                              Hover
                            </Text>
                          </Flexbox>
                          <Flexbox
                            ai_center
                            pl5
                            pr7
                            style={{
                              height: '35px',
                            }}
                          >
                            <Box
                              mr5
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
                              size2
                            >
                              Focus
                            </Text>
                          </Flexbox>
                          <Flexbox
                            ai_center
                            pl5
                            pr7
                            style={{
                              height: '35px',
                            }}
                          >
                            <Box
                              mr5
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
                              size2
                            >
                              Disabled
                            </Text>
                          </Flexbox>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Flexbox>
              <Box
                mb5
                style={{
                  position: 'relative'
                }}
              >
                <Flexbox>
                  <Box
                    fg_1
                  >
                    <StatesButton>
                      Button
                    </StatesButton>
                  </Box>
                  <Box
                    fg_1
                    ml5
                    mr5
                  >
                    <StatesButton
                      blue
                    >
                      Button
                    </StatesButton>
                  </Box>
                  <Box
                    fg_1
                  >
                    <StatesButton
                      green
                    >
                      Button
                    </StatesButton>
                  </Box>
                </Flexbox>
              </Box>
              <Box
                mb5
                style={{
                  position: 'relative'
                }}
              >
                <StatesInput
                  placeholder="Type something..."
                />
              </Box>
              <Flexbox
                ai_center
                style={{
                  position: 'relative'
                }}
              >
                <Box
                  mr5
                >
                  <StatesRadio />
                </Box>
                <Box
                  mr5
                >
                  <StatesCheckbox />
                </Box>
                <Box
                  mr5
                >
                  <StatesIcon
                    disabled
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                      style={{
                        display: 'block'
                      }}
                    >
                      <path d="M0 0V16L5 12L10 16V0H0Z" transform="translate(7.5 4.5)" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M0 0H8" transform="translate(7 6.5)"/>
                    </svg>
                  </StatesIcon>
                </Box>
                <Box
                  fg_1
                >
                  <StatesSlider
                    type="range"
                  />
                </Box>
              </Flexbox>
            </Box>
            <Box
              mb6
            >
              <Heading
                size3
                lh2
                mb5
              >
                States
              </Heading>
              <Text
                size3
                lh3
                gray600
              >
                Add states to real, interactive elements to design how your components look, feel and behave.
              </Text>
            </Box>
          </Box>

          <Box
            pl8
          >
            <Box
              mr6
              fg_1
              style={{
                flexBasis: '0',
              }}
            >
              <Heading
                size3
                lh2
                mb5
              >
                States
              </Heading>
              <Text
                size3
                lh3
                gray600
              >
                Add states to real, interactive elements to design how your components look, feel and behave.
              </Text>
            </Box>
            <Box
              ml6
              fg_1
              style={{
                flexBasis: '0',
              }}
            >
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
                          size2
                          gray600
                        >
                          State
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
                        <Box
                          white
                          style={{
                            height: '35px',
                          }}
                        >
                        </Box>
                        <Box
                          white
                          pt1
                          pb1
                          style={{
                            position: 'absolute',
                            top: '-6px',
                            left: '0',
                            minWidth: '100%',
                            boxShadow: '0 15px 35px hsla(208,30%,10%,.05)',
                            borderRadius: '.1875rem',
                            zIndex: '1',
                            userSelect: 'none',
                          }}
                        >
                          <Flexbox
                            ai_center
                            pl5
                            pr7
                            style={{
                              height: '35px',
                            }}
                          >
                            <Box
                              mr5
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
                              size2
                            >
                              Default
                            </Text>
                          </Flexbox>
                          <Flexbox
                            ai_center
                            pl5
                            pr7
                            blue500
                            style={{
                              height: '35px',
                              color: 'white',
                            }}
                          >
                            <Box
                              mr5
                            >
                              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block'}}>
                                <path d="M10 0L4 8L0 5" transform="translate(2.5 3.5)" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </Box>
                            <Text
                              size2
                            >
                              Hover
                            </Text>
                          </Flexbox>
                          <Flexbox
                            ai_center
                            pl5
                            pr7
                            style={{
                              height: '35px',
                            }}
                          >
                            <Box
                              mr5
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
                              size2
                            >
                              Focus
                            </Text>
                          </Flexbox>
                          <Flexbox
                            ai_center
                            pl5
                            pr7
                            style={{
                              height: '35px',
                            }}
                          >
                            <Box
                              mr5
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
                              size2
                            >
                              Disabled
                            </Text>
                          </Flexbox>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Flexbox>
              <Box
                mb5
                style={{
                  position: 'relative'
                }}
              >
                <Flexbox>
                  <Box
                    fg_1
                  >
                    <StatesButton>
                      Button
                    </StatesButton>
                  </Box>
                  <Box
                    fg_1
                    ml5
                    mr5
                  >
                    <StatesButton
                      blue
                    >
                      Button
                    </StatesButton>
                  </Box>
                  <Box
                    fg_1
                  >
                    <StatesButton
                      green
                    >
                      Button
                    </StatesButton>
                  </Box>
                </Flexbox>
              </Box>
              <Box
                mb5
                style={{
                  position: 'relative'
                }}
              >
                <StatesInput
                  placeholder="Type something..."
                />
              </Box>
              <Flexbox
                ai_center
                style={{
                  position: 'relative'
                }}
              >
                <Box
                  mr5
                >
                  <StatesRadio />
                </Box>
                <Box
                  mr5
                >
                  <StatesCheckbox />
                </Box>
                <Box
                  mr5
                >
                  <StatesIcon
                    disabled
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      stroke="currentColor"
                      style={{
                        display: 'block'
                      }}
                    >
                      <path d="M0 0V16L5 12L10 16V0H0Z" transform="translate(7.5 4.5)" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M0 0H8" transform="translate(7 6.5)"/>
                    </svg>
                  </StatesIcon>
                </Box>
                <Box
                  fg_1
                >
                  <StatesSlider
                    type="range"
                  />
                </Box>
              </Flexbox>
            </Box>
          </Box>

        </Flexbox>
      </Container>
    </Section>
  </div>
)

export default NewStates
