import { rankWith, formatIs } from "@jsonforms/core";

export default rankWith(
  3, //increase rank as needed
  formatIs("binary")
  // scopeEndsWith('rating')
);
