import { rankWith, and, isBooleanControl } from "@jsonforms/core";

export default rankWith(
  3, //increase rank as needed
  and(isBooleanControl)
);
