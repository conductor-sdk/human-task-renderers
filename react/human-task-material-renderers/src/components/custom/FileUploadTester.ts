import { rankWith, formatIs, optionIs, and } from "@jsonforms/core";

export default rankWith(
  3, //increase rank as needed
  // scopeEndsWith('rating')
  and(
    formatIs("binary"),
    optionIs("readonly", true),
    optionIs("display", "file-upload")
  )
);
