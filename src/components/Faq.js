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
  <Section size3 style={{paddingTop: '0'}}>
    <Container size3>
      <Flexbox fd_column bp2_fd_row bp2_nml_8 nmt_8 fw_wrap>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_8>
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
              To start with, Modulz will be a progressive web app. It works with both OSX and Windows. You can share your work freely and easily.
            </Text>
          </Box>
        </Box>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_8>
          <Box>
            <Heading
              size2
              lh_3
              bold
              mb_1
            >
              Will Modulz support native platforms?
            </Heading>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
            >
              As a design environment, Modulz will support both mobile and desktop. In terms of code output, we're focusing on web initially. Our first foray into mobile code export will be React Native.
            </Text>
          </Box>
        </Box>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_8>
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
              Modulz exports production-ready React components. We're starting with CSS-in-JS libraries. Next, we'll add support for vanilla HTML/CSS.
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
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_8>
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
              Modulz feels familiar—it has layers, artboards and a properties panel. But there are no vectors. With Modulz, you can build production components with interactive states. Design fully responsive layouts with first-class media query support.
            </Text>
          </Box>
        </Box>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_8>
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
              Of all design/dev tools, Modulz is most similar to Webflow.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              The main difference is, Modulz is component-driven and has systematic design baked right into its core.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              Modulz is capable of producing much more than websites—with support for complex, interactive components.
            </Text>
            <Text
              as="p"
              size4
              lh_3
              color_gray600
              mb_3
            >
              We also export to modern code libraries like React.
            </Text>
          </Box>
        </Box>
        <Box fs_0 bp2_width_50 bp2_pl_8 pt_8>
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
              We have huge ambitions for Modulz. Our first priority is building out the core product.
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
