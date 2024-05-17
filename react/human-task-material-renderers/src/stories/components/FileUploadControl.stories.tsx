import type { Meta } from "@storybook/react";
import { ControlProps } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import { FileUploadControl, FileUploadTester } from "components/custom";

const renderers = [
  ...materialRenderers,
  { tester: FileUploadTester, renderer: FileUploadControl },
];

const schema = {
  properties: {
    file: {
      type: "string",
      format: "binary",
    },
  },
};

const uiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/file",
      label: "File upload",
      options: {
        readonly: true,
        display: "file-upload",
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
  title: "File/File upload JSON form control",
  component: Control,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<ControlProps>;
