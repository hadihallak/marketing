import React from 'react'
import styled, { css } from 'styled-components';
import { Theme } from 'radix-ds';

import {
  Section,
  Container,
  Flexbox,
  Box,
  Text,
  LinesButton
} from 'radix-ds';

const Cta = () => (
  <Section
    size2
  >
    <Container>
      <Flexbox
        ai_center
        jc_center
        fd_column
        bp1_fd_row
      >
        <Box mb_6 bp1_mb_0 bp1_mr_5>
          <Text size4>
            Interested? Check out our Kickstarter!
          </Text>
        </Box>
        <Box>
          <LinesButton
            as="a"
            href="https://www.kickstarter.com/projects/stephenhaney/modulzthe-next-step-in-visual-coding"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Kickstarter
            <Box ml_3>
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor">
                <path d="M9.5 2.5H12.5V5.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.5 8.5L12.5 2.5" strokeLinecap="round"/>
                <path d="M10.5 9.07143V12C10.5 12.2761 10.2761 12.5 10 12.5H3C2.72386 12.5 2.5 12.2761 2.5 12V5C2.5 4.72386 2.72386 4.5 3 4.5H5.92857" strokeLinecap="round"/>
              </svg>
            </Box>
          </LinesButton>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default Cta
