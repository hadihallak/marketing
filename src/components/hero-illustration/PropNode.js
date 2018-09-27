import React from 'react';

import {
  Flexbox,
  ListItem,
  Text,
  GhostButton,
  Box,
  Tooltip,
  CheckboxButton,
  Divider,
  Badge,
  HoverZone,
  HoverZonePanel,
} from 'radix-ds';

const PropNode = (props) => (
  <HoverZone>
    <ListItem
      {...props}
    >
      <Flexbox ai_center jc_spacebetween>
        <Text size1>{props.label}</Text>
        <HoverZonePanel>
          <Flexbox
            ai_center
            style={{marginRight: '-10px'}}
          >
            <Tooltip data-tooltip="Set as default" data-position="top">
              <CheckboxButton style={{marginRight: '5px',marginLeft: '5px'}}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.5 3.5L6.5 11.5L3.5 8.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </CheckboxButton>
            </Tooltip>
            <Tooltip data-tooltip="Preview" data-position="top">
              <CheckboxButton style={{marginRight: '10px',marginLeft: '5px'}}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  stroke="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.5 12.5C4.5 12.5 2 10.5 0.5 7.50002C2 4.5 4.5 2.5 7.5 2.5C10.5 2.5 13 4.5 14.5 7.50001C13 10.5 10.5 12.5 7.5 12.5Z" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7.5" cy="7.5" r="2"/>
                </svg>
              </CheckboxButton>
            </Tooltip>
            <GhostButton size1>
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="none"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="7.5" cy="2.5" r="1.5"/>
                <circle cx="7.5" cy="7.5" r="1.5"/>
                <circle cx="7.5" cy="12.5" r="1.5"/>
              </svg>
            </GhostButton>
          </Flexbox>
        </HoverZonePanel>
      </Flexbox>
    </ListItem>
  </HoverZone>
);

export default PropNode;
