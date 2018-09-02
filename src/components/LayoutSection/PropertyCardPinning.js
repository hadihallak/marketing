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

const PropertyCardPinning = () => (
  <Box
    gray100
    p2
  >
    <Heading
      size1
      mb2
    >
      Pin
    </Heading>
    <Flexbox
      mb2
    >
      <ToggleButton
        size1
        left
        checked
      />
      <ToggleButton
        size1
        middle
      />
      <ToggleButton
        size1
        middle
      />
      <ToggleButton
        size1
        right
      />
    </Flexbox>
    <Flexbox
      mb2
    >
      <ToggleButton
        size1
        left
      />
      <ToggleButton
        size1
        middle
      />
      <ToggleButton
        size1
        middle
      />
      <ToggleButton
        size1
        right
      />
    </Flexbox>
    <Flexbox
      ai_center
    >
      <Box
        mr2
      >
        <Text
          size1
          gray600
        >
          Order
        </Text>
      </Box>
      <Box
        fg1
      >
        <Flexbox>
          <Box
            mr2
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
                <path d="M12.5 19.5V5.5" strokeLinecap="round"/>
              </svg>
            </Button>
          </Box>
          <Box>
            <Input
              placeholder="Z index"
              value="0"
            />
          </Box>
          <Box
            ml2
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
        </Flexbox>
      </Box>
    </Flexbox>
  </Box>
)

export default PropertyCardPinning
