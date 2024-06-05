/*
 * Copyright 2024 Conductor Authors.
 * <p>
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * <p>
 * http://www.apache.org/licenses/LICENSE-2.0
 * <p>
 * Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
 * an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

import type { Meta } from "@storybook/react";
import { ControlProps } from "@jsonforms/core";
import { JsonForms } from "@jsonforms/react";
import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

import { MarkdownTextControl, MarkdownTextTester } from "components/custom";

const renderers = [
  ...materialRenderers,
  { tester: MarkdownTextTester, renderer: MarkdownTextControl },
];

const schema = {
  properties: {
    markdown: {
      type: "string",
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
