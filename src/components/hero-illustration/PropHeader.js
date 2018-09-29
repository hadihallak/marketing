import React from 'react';

import {
  Flexbox,
  GhostButton,
  Heading
} from 'radix-ds';

const PropHeader = (props) => (
  <Flexbox
    ai_center
    jc_spacebetween
    padding_2
    pl_3
    nmr_1
  >
    <Heading
      size1
      gray600
    >
      {props.label}
    </Heading>
    <Flexbox>
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
      <GhostButton size1>
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          stroke="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.5 7.5H12.5" strokeLinecap="round"/>
          <path d="M7.5 12.5V2.5" strokeLinecap="round"/>
        </svg>
      </GhostButton>
      {/*<GhostButton size1>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9.5" cy="6.5" r="0.5"></circle>
          <circle cx="12.5" cy="6.5" r="0.5"></circle>
          <circle cx="15.5" cy="6.5" r="0.5"></circle>
          <circle cx="9.5" cy="9.5" r="0.5"></circle>
          <circle cx="12.5" cy="9.5" r="0.5"></circle>
          <circle cx="15.5" cy="9.5" r="0.5"></circle>
          <circle cx="9.5" cy="12.5" r="0.5"></circle>
          <circle cx="12.5" cy="12.5" r="0.5"></circle>
          <circle cx="15.5" cy="12.5" r="0.5"></circle>
          <circle cx="9.5" cy="15.5" r="0.5"></circle>
          <circle cx="12.5" cy="15.5" r="0.5"></circle>
          <circle cx="15.5" cy="15.5" r="0.5"></circle>
          <circle cx="9.5" cy="18.5" r="0.5"></circle>
          <circle cx="12.5" cy="18.5" r="0.5"></circle>
          <circle cx="15.5" cy="18.5" r="0.5"></circle>
        </svg>
      </GhostButton>*/}
    </Flexbox>
  </Flexbox>
);

export default PropHeader;
