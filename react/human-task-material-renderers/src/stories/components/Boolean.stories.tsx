import type { Meta, StoryObj } from "@storybook/react";
import BooleanComponent, {
  BooleanProps,
} from "components/custom/Boolean/Boolean";

export default {
  title: "Boolean",
  component: BooleanComponent,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<BooleanProps>;

type Story = StoryObj<typeof BooleanComponent>;

export const Primary: Story = {
  args: {
    label: "Check box",
    default: false,
    value: false
  },
};
