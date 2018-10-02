import React from 'react';

import {
  Flexbox,
  ListItem,
  Text,
  GhostButton,
  CheckboxButton,
  HoverZone,
  HoverZonePanel,
} from 'radix-ds';

const PropNode = (props) => (
  <HoverZone>
    <ListItem
      {...props}
      tabIndex="-1"
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
