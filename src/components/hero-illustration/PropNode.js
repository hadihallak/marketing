import React from 'react';

import {
  Flexbox,
  ListItem,
  Text,
  GhostButton,
  Tooltip,
  CheckboxButton,
  HoverZone,
  HoverZonePanel,
} from 'radix-ds';

const PropNode = (props) => (
  <HoverZone>
    <ListItem
      {...props}
    >
      <Flexbox
        ai_center
        jc_spacebetween
      >
        <Text size2>{props.label}</Text>
      </Flexbox>
    </ListItem>
  </HoverZone>
);

export default PropNode;
