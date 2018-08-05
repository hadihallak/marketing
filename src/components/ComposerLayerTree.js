import React from 'react';
import {
  Flexbox,
  Box,
  List,
  Text
} from 'radix-ds';

import ComposerLayerNode from './ComposerLayerNode'

function ComposerLayerTree() {
  return (
    <Box
      br
      bcgray300
      fs0
      style={{
        width: '20%',
      }}
    >
      <List
        size1
      >
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
        <ComposerLayerNode />
      </List>
    </Box>
  );
}

export default ComposerLayerTree;
