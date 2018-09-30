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
        <Box mb_5 bp1_mb_0 bp1_mr_5>
          <Text size4>
            Interested? Support us on Kickstarter!
          </Text>
        </Box>
        <Box>
          <LinesButton
            as="a"
            href="https://www.kickstarter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit Kickstarter
          </LinesButton>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default Cta
