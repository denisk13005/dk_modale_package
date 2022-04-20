import React from "react";
import { storiesOf } from "@storybook/react";

import {Modal} from '../components/Modal'

const stories = storiesOf('App Test',module)

stories.add('App', () => {
  return (<Modal/>)
})