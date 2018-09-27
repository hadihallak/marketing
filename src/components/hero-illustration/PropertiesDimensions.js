import React from 'react';
import {
  Flexbox,
  Box,
  Heading,
  Select,
  CheckboxButton,
  Text
} from 'radix-ds';

function PropertiesDimensions() {
  return (
    <Box
      p2
      bt
      bcgray300
    >
      <Heading
        size1
        gray600
        mb2
      >
        Dimensions
      </Heading>
      <Flexbox mt2 ai_center>
      <Flexbox fg1 ai_center mr3>
        <Flexbox ai_center fg1 fb0 pr2>
          <Box fs0 style={{width: '20px'}}>
            <Text size1 gray600 style={{fontSize: '11px'}}>W</Text>
          </Box>
          <Box fg1>
            <Select>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option>35</option>
              <option>45</option>
              <option>65</option>
              <option>80</option>
              <option selected>Auto</option>
            </Select>
          </Box>
        </Flexbox>
        <Flexbox ai_center fg1 fb0 pl2>
          <Box fs0 style={{width: '20px'}}>
            <Text size1 gray600 style={{fontSize: '11px'}}>H</Text>
          </Box>
          <Box fg1>
            <Select>
              <option>5</option>
              <option>10</option>
              <option>15</option>
              <option>20</option>
              <option>25</option>
              <option selected>35</option>
              <option>45</option>
              <option>65</option>
              <option>80</option>
              <option>Auto</option>
            </Select>
          </Box>
        </Flexbox>
      </Flexbox>
      <CheckboxButton>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          stroke="hsl(208,100%,50%)"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.50003 4.5H4C1.5 4.5 0.5 6 0.5 7.5C0.5 9 1.49997 10.5 4 10.5H5.50003" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.5 4.5H11C13.5 4.5 14.5 6 14.5 7.5C14.5 9 13.5 10.5 11 10.5H9.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M10.5 7.5H4.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </CheckboxButton>
    </Flexbox>
    </Box>
  );
}

export default PropertiesDimensions;