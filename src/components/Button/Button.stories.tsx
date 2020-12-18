/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';

import { storiesOf } from '@storybook/react';

import Button from './index';

storiesOf('Button', module)
  .add('primary', () => <Button variant="primary">Primary</Button>)
  .add('outline', () => <Button variant="outline">Outline</Button>);
