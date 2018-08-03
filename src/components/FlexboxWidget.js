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

import IPhoneSE from './IPhoneSE'

const FlexboxWidget = () => (
  <Section>
    <Container
      size2
    >
      <Flexbox
        ai_center
      >
        <Box
          mb5
        >
          <Box
            mb5
          >
            <Heading
              size3
              gray600
              mb2
            >
              Freeform
            </Heading>
            <Heading
              size3
            >
              Flexbox
            </Heading>
          </Box>
          <Text
            size3
            lh3
          >
            Gatsby will perform an optimized production build for your site generating static HTML and per-route JavaScript code bundles.
          </Text>
        </Box>
        <Box
          mb5
          pl6
          pr6
        >
          <Box
            gray200
            br
            bl
            bcgray300
            p2
            h100
            fs0
            style={{
              width: '220px',
              height: 'calc(100% + 160px)',
            }}
          >
            <Heading
              size1
              mb2
            >
              Layout
            </Heading>
            <Box
              table
              w100
            >
              <Box
                tablerow
              >
                <Box
                  tablecell
                  alignmiddle
                  pr2
                >
                  <Text
                    size1
                    gray600
                  >
                    Direction
                  </Text>
                </Box>
                <Box
                  tablecell
                  alignmiddle
                >
                  <Flexbox>
                    <Button
                      size1
                      left
                    >
                      Row
                    </Button>
                    <Button
                      size1
                      right
                    >
                      Column
                    </Button>
                  </Flexbox>
                </Box>
              </Box>
              <Box
                pt2>
              </Box>
              <Box
                tablerow
              >
                <Box
                  tablecell
                  pr2
                  alignmiddle
                >
                  <Text
                    size1
                    gray600
                  >
                    Align
                  </Text>
                </Box>
                <Box
                  tablecell
                  alignmiddle
                >
                  <Select>
                    <option>
                      Start
                    </option>
                    <option>
                      Center
                    </option>
                    <option>
                      End
                    </option>
                    <option>
                      Stretch
                    </option>
                    <option>
                      Baseline
                    </option>
                  </Select>
                </Box>
              </Box>
              <Box
                pt2>
              </Box>
              <Box
                tablerow
              >
                <Box
                  tablecell
                  pr2
                  alignmiddle
                >
                  <Text
                    size1
                    gray600
                  >
                    Distribute
                  </Text>
                </Box>
                <Box
                  tablecell
                  alignmiddle
                >
                  <Select>
                    <option>
                      Start
                    </option>
                    <option>
                      Center
                    </option>
                    <option>
                      End
                    </option>
                    <option>
                      Space between
                    </option>
                    <option>
                      Space around
                    </option>
                  </Select>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box>
          <IPhoneSE>
            <Box
              p4
              blue500
            >
            </Box>
          </IPhoneSE>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default FlexboxWidget
