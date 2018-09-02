import React from 'react'

import { Flexbox } from 'radix-ds';
import { Box } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';
import { Button } from 'radix-ds';
import { ToggleButton } from 'radix-ds';
import { Select } from 'radix-ds';
import { Switch } from 'radix-ds';
import { Input } from 'radix-ds';

const PropertyCardSpacing = () => (
  <Box
    gray100
    p2
  >
    <Heading
      size1
      mb2
    >
      Margin
    </Heading>
    <Flexbox
      ai_center
    >
      <Box
        mr2
        fb0
        fg1
      >
        <Input
          value="20"
        />
      </Box>
      <Box
        fb0
        fg1
      >
        <Input
          value="20"
        />
        <Box
          mt2
          mb2
          center
        >
          <Button
            size1
          >
            <svg
              width="25"
              height="25"
              viewBox="0
              0
              25
              25"
              fill="none"
              stroke="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                display: 'block'
              }}
            >
              <path d="M5.5 12.5H19.5" strokeLinecap="round"/>
            </svg>
          </Button>
        </Box>
        <Input
          value="20"
        />
      </Box>
      <Box
        ml2
        fb0
        fg1
      >
        <Input
          value="20"
        />
      </Box>
    </Flexbox>

    <Box
      mt2
      pt2
      bt
      bcgray300
    >
      <Heading
        size1
        mb2
      >
        Padding
      </Heading>
      <Flexbox
        ai_center
      >
        <Box
          mr2
          fb0
          fg1
        >
          <Input
            value="20"
          />
        </Box>
        <Box
          fb0
          fg1
        >
          <Input
            value="20"
          />
          <Box
            mt2
            mb2
            center
          >
            <Button
              size1
            >
              <svg
                width="25"
                height="25"
                viewBox="0
                0
                25
                25"
                fill="none"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  display: 'block'
                }}
              >
                <path d="M5.5 12.5H19.5" strokeLinecap="round"/>
              </svg>
            </Button>
          </Box>
          <Input
            value="20"
          />
        </Box>
        <Box
          ml2
          fb0
          fg1
        >
          <Input
            value="20"
          />
        </Box>
      </Flexbox>
    </Box>
  </Box>
)

export default PropertyCardSpacing
