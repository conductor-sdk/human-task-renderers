import type { Meta, StoryObj } from "@storybook/react";
import VideoViewer, {
  VideoViewerProps,
} from "components/custom/VideoView/VideoViewer";

export default {
  title: "Video viewer",
  component: VideoViewer,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<VideoViewerProps>;

type Story = StoryObj<typeof VideoViewer>;

export const Primary: Story = {
  args: {
    defaultUrl:
      "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    width: 500,
    height: 300,
  },
};
