import type { Meta, StoryObj } from "@storybook/react";
import DescriptionText, {
  DescriptionTextProps,
} from "components/custom/DescriptionText";

export default {
  title: "Description text",
  component: DescriptionText,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<DescriptionTextProps>;

type Story = StoryObj<typeof DescriptionText>;

export const Primary: Story = {
  args: {
    value: "This is a test string.",
  },
};
