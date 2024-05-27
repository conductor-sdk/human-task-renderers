import type { Meta } from "@storybook/react";
import { ControlProps } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import { BooleanControl, BooleanTester } from "components/custom";

const renderers = [
  ...materialRenderers,
  { tester: BooleanTester, renderer: BooleanControl },
];

const schema = {
  properties: {
    bool: {
      type: "boolean",
    },
  },
};

const uiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/bool",
      label: "Checkbox",
      options: {
        display: "boolean",
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
  title: "Boolean JSON form control",
  component: Control,
  tags: ["autodocs"],
  args: {
    data: {
      bool: true,
    },
  },
  argTypes: {},
} as Meta<ControlProps>;
