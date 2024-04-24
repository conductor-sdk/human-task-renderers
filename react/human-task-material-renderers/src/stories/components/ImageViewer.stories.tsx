import type { Meta, StoryObj } from "@storybook/react";
import ImageViewer, { ImageViewerProps } from "components/custom/ImageViewer";

export default {
  title: "Image viewer",
  component: ImageViewer,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<ImageViewerProps>;

type Story = StoryObj<typeof ImageViewer>;

export const Primary: Story = {
  args: {
    defaultUrl:
      "https://e1.pxfuel.com/desktop-wallpaper/244/673/desktop-wallpaper-cute-siberian-husky-puppy-sitting-on-grass-puppies-baby-siberian-husky.jpg",
  },
};
