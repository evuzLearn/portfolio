import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from '../../components/Button/Button';

storiesOf('Button', module)
  .add('With action', () => <Button onClick={action('clicked')}>Click me!</Button>)
  .add('Invert', () => <Button onClick={action('clicked')} invert>Invert theme</Button>);
