import type { Meta, StoryObj } from "@storybook/react";
import FileUpload, { UploadButtonProps } from "components/custom/FileUpload";

export default {
  title: "File/File upload",
  component: FileUpload,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<UploadButtonProps>;

type Story = StoryObj<typeof FileUpload>;

export const Primary: Story = {
  args: {},
};
