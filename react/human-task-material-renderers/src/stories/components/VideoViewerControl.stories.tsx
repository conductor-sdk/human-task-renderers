import type { Meta } from "@storybook/react";
import { ControlProps } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import { VideoViewerControl, VideoViewerTester } from "components/custom";

const renderers = [
  ...materialRenderers,
  { tester: VideoViewerTester, renderer: VideoViewerControl },
];

const schema = {
  properties: {
    video: {
      type: "string",
      format: "uri",
    },
  },
};

const uiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/video",
      label: "Video viewer",
      options: {
        readonly: true,
        display: "video-viewer",
      },
    },
  ],
};

export const Control = (args: ControlProps) => {
  return (
    <JsonForms
      schema={schema}
      uischema={uiSchema}
      renderers={renderers}
      cells={materialCells}
      data={args.data}
      readonly={false}
    />
  );
};

export default {
  title: "JSON form VideoViewer control",
  component: Control,
  tags: ["autodocs"],
  args: {
    data: {
      video:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
  },
  argTypes: {},
} as Meta<ControlProps>;
