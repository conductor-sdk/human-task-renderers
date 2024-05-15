import type { Meta, StoryObj } from "@storybook/react";
import {
  MarkdownText,
  MarkdownTextProps,
} from "components/custom/MarkdownText/MarkdownText";

export default {
  title: "Markdown/Markdown text",
  component: MarkdownText,
  tags: ["autodocs"],
  args: {},
  argTypes: {},
} as Meta<MarkdownTextProps>;

type Story = StoryObj<typeof MarkdownText>;

export const Primary: Story = {
  args: {
    label: "Markdown text",
    markdown: `
    ---
__Advertisement :)__

- __[pica](https://nodeca.github.io/pica/demo/)__ - high quality and fast image
  resize in browser.
- __[babelfish](https://github.com/nodeca/babelfish/)__ - developer friendly
  i18n with plurals support and easy syntax.

You will like those projects!

---

# h1 Heading 8-)
## h2 Heading
### h3 Heading
#### h4 Heading
##### h5 Heading
###### h6 Heading


## Horizontal Rules

___

---

***


## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis
    `,
  },
};
