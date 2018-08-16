import React from 'react'

import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';
import { Button } from 'radix-ds';
import { Select } from 'radix-ds';
import { Switch } from 'radix-ds';

const LayoutFlexbox = () => (
  <Box
    gray100
    p2
    style={{
      boxShadow: '0 35px 55px 10px hsla(208,30%,10%,.05)',
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
      <Box
        pt3
      >
      </Box>
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
            Wrap
          </Text>
        </Box>
        <Box
          tablecell
          alignmiddle
        >
          <Switch />
        </Box>
      </Box>
    </Box>
  </Box>
)

export default LayoutFlexbox
