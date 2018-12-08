import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CenterDecorator } from '../decorators/center';
import { Button } from '../../components/Button/Button';

storiesOf('Button', module)
  .addDecorator(CenterDecorator)
  .add('With action', () => <Button onClick={action('clicked')}>Click me!</Button>)
  .add('Invert', () => (
    <Button onClick={action('clicked')} invert>
      Invert theme
    </Button>
  ));
