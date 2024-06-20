/*
 * Copyright 2024 Conductor Authors.
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import type { Meta, StoryObj } from "@storybook/react";
import RadioGroupComponent, {
  RadioGroupProps,
} from "components/custom/RadioGroup/RadioGroup";

export default {
  title: "RadioGroup",
  component: RadioGroupComponent,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<RadioGroupProps>;

type Story = StoryObj<typeof RadioGroupComponent>;

export const Primary: Story = {
  args: {
    label: "Radio control",
    default: "",
    value: "radio1",
    options: ["radio1", "radio2"],
  },
};
