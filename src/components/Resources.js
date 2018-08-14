import React from 'react'
import { Link } from 'gatsby'

import { Section } from 'radix-ds';
import { Container } from 'radix-ds';
import { Box } from 'radix-ds';
import { Flexbox } from 'radix-ds';
import { Heading } from 'radix-ds';
import { Text } from 'radix-ds';

const Resources = () => (
  <Section
    size3
    style={{
      backgroundColor: 'hsl(208,100%,97%)',
    }}
  >
    <Container>
      <Box>
        <Heading
          size4
        >
         Further reading on what we are building
        </Heading>
      </Box>
      <Flexbox>
        <Box
          p6
          border
          bcgray300
          pl4
          pr4
          fg1
          style={{
            flexBasis: '0',
            borderColor: 'hsl(208,90%,86%)',
          }}
        >
          <Text
            size3
            lh3
            gray600
          >
            &quot;I can’t describe how excited I am for @Modulz by @colmtuite. You should follow along if you aren’t already.&quot;
          </Text>
          <Link
            to="/composer"
            style={{
              textDecoration: 'none',
              color: 'inherit',
            }}
          >
          </Link>
        </Box>
        <Box
          p6
          border
          bcgray300
          pl4
          pr4
          fg1
          style={{
            flexBasis: '0',
            borderColor: 'hsl(208,90%,86%)',
          }}
        >
          <Text
            size3
            lh3
            gray600
          >
            &quot;Whatever @colmtuite and his class of shameless Front End Design pals don’t stand to make money on/are not good at, is by definition totally unnecessary and actually an evil to be purged and eliminated from the design industry.&quot;
          </Text>
          <Flexbox
            ai_center
            mt4
          >
            <Box
              mr4
              style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                width="35"
                height="35"
                src="https://pbs.twimg.com/profile_images/1010363374725550080/lb8juiVi_bigger.jpg"
              />
            </Box>
            <Text
              size1
              gray600
            >
              Eli Schiff
            </Text>
            <Link
              to="/composer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
            </Link>
          </Flexbox>
        </Box>
        <Box
          p6
          border
          bcgray300
          pl4
          pr4
          fg1
          style={{
            flexBasis: '0',
            borderColor: 'hsl(208,90%,86%)',
          }}
        >
          <Text
            size3
            lh3
            gray600
          >
            &quot;Whatever @colmtuite and his class of shameless Front End Design pals don’t stand to make money on/are not good at, is by definition totally unnecessary and actually an evil to be purged and eliminated from the design industry.&quot;
          </Text>
          <Flexbox
            ai_center
            mt4
          >
            <Box
              mr4
              style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                width="35"
                height="35"
                src="https://pbs.twimg.com/profile_images/1010363374725550080/lb8juiVi_bigger.jpg"
              />
            </Box>
            <Text
              size1
              gray600
            >
              Eli Schiff
            </Text>
            <Link
              to="/composer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
            </Link>
          </Flexbox>
        </Box>
        <Box
          p6
          border
          bcblue300
          pl4
          pr4
          fg1
          style={{
            flexBasis: '0',
            borderColor: 'hsl(208,90%,86%)',
          }}
        >
          <Text
            size3
            lh3
            gray600
          >
            &quot;Whatever @colmtuite and his class of shameless Front End Design pals don’t stand to make money on/are not good at, is by definition totally unnecessary and actually an evil to be purged and eliminated from the design industry.&quot;
          </Text>
          <Flexbox
            ai_center
            mt4
          >
            <Box
              mr4
              style={{
                width: '35px',
                height: '35px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                width="35"
                height="35"
                src="https://pbs.twimg.com/profile_images/1010363374725550080/lb8juiVi_bigger.jpg"
              />
            </Box>
            <Text
              size1
              gray600
            >
              Eli Schiff
            </Text>
            <Link
              to="/composer"
              style={{
                textDecoration: 'none',
                color: 'inherit',
              }}
            >
            </Link>
          </Flexbox>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default Resources
