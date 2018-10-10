import React from 'react'
import {
  Section,
  Container,
  Box,
  Heading,
  Text,
  Flexbox,
  AspectRatio,
} from 'radix-ds';

const Faq = () => (
  <Section size2 bp1_size3>
    <Container size3>
      <Flexbox fd_column bp2_fd_row bp2_nml_8 nmt_5 bp1_nmt_8 fw_wrap>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_5 bp2_pt_8>
          <Box>
            <Heading
              size2
              lh_3
              bold
              mb_1
            >
              Will Modulz be a desktop app or a web app?
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              Initially, Modulz is a progressive web app. It works with OSX, Windows and Linux. You can share your work freely and easily.
            </Text>
          </Box>
        </Box>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_5 bp2_pt_8>
          <Box>
            <Heading
              size2
              lh_3
              bold
              mb_1
            >
              Is Modulz for mobile or desktop design?
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              As a design environment, Modulz will support all devices. In terms of code output, we're focusing on web initially, but we have plans to support mobile.
            </Text>
          </Box>
        </Box>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_5 bp2_pt_8>
          <Box>
            <Heading
              size2
              lh_3
              bold
              mb_1
            >
              What does Modulz export?
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Production-ready React components. Next, we'll add support for vanilla HTML/CSS.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Soon, we plan to export to Preact, React Native and Vue.js.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Other plans include exporting to Gatsby and integrating Netlify for free, one-click publishing.
            </Text>
          </Box>
        </Box>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_5 bp2_pt_8>
          <Box>
            <Heading
              size2
              lh_3
              bold
              mb_1
            >
              How does Modulz compare with Sketch/Figma?
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Sketch and Figma are both drawing tools. Modulz is a dedicated UI design and development tool.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              Modulz feels familiar—it has layers, artboards and a properties panel. But there are no vectors. With Modulz, you can build production components with interactive states and design fully responsive layouts.
            </Text>
          </Box>
        </Box>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_5 bp2_pt_8>
          <Box>
            <Heading
              size2
              lh_3
              bold
              mb_1
            >
              How does Modulz compare with Webflow?
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Of all design/dev tools, Modulz is most similar to Webflow, with a few key differences.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Modulz is 100% component-driven with design systems baked right into its core.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Modulz exports to modern code libraries like React. Our goal is to import/export code seamlessly.
            </Text>
          </Box>
        </Box>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_5 bp2_pt_8>
          <Box>
            <Heading
              size2
              lh_3
              bold
              mb_1
            >
              What are your future plans?
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Our first priority is building out the core product.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Then, we'll add team features like existing component library import. We're planning a community-driven, production-grade component store.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              The end game is Github integration, so teams can seamlessly pass production code between Modulz and text editors.
            </Text>
          </Box>
        </Box>
      </Flexbox>
    </Container>
  </Section>
)

export default Faq
