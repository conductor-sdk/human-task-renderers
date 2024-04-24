import type { Meta, StoryObj } from "@storybook/react";
import { ControlProps } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import ImageViewer from "components/custom/ImageViewerControl";
import {
  DescriptionTextControl,
  DescriptionTextTester,
  ImageViewerControl,
  ImageViewerTester,
  VideoViewerControl,
  VideoViewerTester,
} from "components/custom";

const renderers = [
  ...materialRenderers,
  { tester: DescriptionTextTester, renderer: DescriptionTextControl },
  { tester: ImageViewerTester, renderer: ImageViewerControl },
  { tester: VideoViewerTester, renderer: VideoViewerControl },
];

type Story = StoryObj<typeof ImageViewer>;

export const Control = (args: Story) => {
  console.debug("🚀 ~ Control ~ args:", args);

  return (
    <JsonForms
      // schema={schema}
      // uischema={{}}
      renderers={renderers}
      cells={materialCells}
      data={{}}
      readonly={false}
      // onChange={({ data }) => onChange(data)}
      validationMode={"ValidateAndShow"}
    />
  );
};

export default {
  title: "JSON form control",
  component: Control,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<ControlProps>;
