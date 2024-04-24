import { rankWith, and, optionIs, formatIs } from "@jsonforms/core";

export default rankWith(
  3,
  and(
    formatIs("uri"),
    optionIs("readonly", true),
    optionIs("display", "image-viewer")
  )
);
