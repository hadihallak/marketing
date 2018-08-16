import React from 'react';
import {
  Flexbox,
  Box,
  List,
  Heading,
  Text,
  Button,
  Slider,
  Input,
  Select
} from 'radix-ds';

function PropertiesAppearance() {
  return (
    <Box
      p2
      bt
      style={{
        borderColor: 'hsl(208, 18%, 22%)',
      }}
    >
      <Heading
        size1
        mb2
        white
      >
        Appearance
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
              Opacity
            </Text>
          </Box>
          <Box
            tablecell
            alignmiddle
          >
            <Flexbox>
              <Slider />
              <Input
                defaultValue="100"
              />
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
              Fill
            </Text>
          </Box>
          <Box
            tablecell
            alignmiddle
          >
            <div
              style={{
                width: '25px',
                height: '25px',
                backgroundColor: 'pink',
                borderRadius: '50%',
              }}
            >
            </div>
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
  );
}

export default PropertiesAppearance;
