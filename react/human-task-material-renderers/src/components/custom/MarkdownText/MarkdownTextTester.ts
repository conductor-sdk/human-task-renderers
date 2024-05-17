import { rankWith, and, optionIs } from "@jsonforms/core";

export default rankWith(
  3, //increase rank as needed
  and(optionIs("readonly", true), optionIs("display", "markdown-text"))
);
