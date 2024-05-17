import type { Meta } from "@storybook/react";
import { ControlProps } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import {
  MarkdownTextControl,
  MarkdownTextTester,
} from "components/custom";

const renderers = [
  ...materialRenderers,
  { tester: MarkdownTextTester, renderer: MarkdownTextControl },
];

const schema = {
  properties: {
    markdown: {
     type: "string"      
    },
  },
};

const uiSchema = {
  type: "VerticalLayout",
  elements: [
    {
      type: "Control",
      scope: "#/properties/markdown",
      label: "Markdown viewer",
      options: {
        readonly: true,
        display: "markdown-text",       
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
  title: "Markdown/Markdown text JSON form control",
  component: Control,
  tags: ["autodocs"],
  args: {
    data: {
      markdown: `### [Abbreviations](https://github.com/markdown-it/markdown-it-abbr)

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language

### [Custom containers](https://github.com/markdown-it/markdown-it-container)

::: warning
*here be dragons*
:::`,
    },
  },
  argTypes: {},
} as Meta<ControlProps>;
