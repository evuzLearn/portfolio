import React from 'react';

const styles = {
  display: 'flex',
  justifyContent: 'center',
};

export const CenterDecorator = storyFn => {
  return <div style={styles}>{storyFn()}</div>;
};
