import type { Meta } from "@storybook/react";
import { ControlProps } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import {
  ImageViewerControl,
  ImageViewerTester,
} from "components/custom";

const renderers = [
  ...materialRenderers,
  { tester: ImageViewerTester, renderer: ImageViewerControl },
];

const schema = {
  properties: {
    image: {
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
      scope: "#/properties/image",
      label: "Image viewer",
      options: {
        readonly: true,
        display: "image-viewer",        
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
  title: "JSON form ImageViewer control",
  component: Control,
  tags: ["autodocs"],
  args: {
    data: {
      image:
        "https://e1.pxfuel.com/desktop-wallpaper/244/673/desktop-wallpaper-cute-siberian-husky-puppy-sitting-on-grass-puppies-baby-siberian-husky.jpg",
    },
  },
  argTypes: {},
} as Meta<ControlProps>;
