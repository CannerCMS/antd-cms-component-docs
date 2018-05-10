// @flow
import React from 'react';
import RefId from 'canner-ref-id';
import customPreview from 'stories/customPreview';
import README from './README.md';
import IntlComponent from 'components/IntlComponent';

import Select from '@canner/antd-string-select';
import { storiesOf } from '@storybook/react';
import ExamplePrimitiveValueWrapper from '../../ExamplePrimitiveValueHoc';

const SelectDefault = ExamplePrimitiveValueWrapper("16:18")(IntlComponent(Select))

storiesOf('String', module)
  .add('Select', customPreview(README, () => (
    <SelectDefault
      refId={new RefId("select")}
      uiParams={{
        options: [{
          text: 'option 1',
          value: "1"
        }, {
          text: 'option 2',
          value: "2"
        }]
      }}
      />
  )));