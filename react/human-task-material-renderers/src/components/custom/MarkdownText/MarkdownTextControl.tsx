import { ControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { MarkdownText } from "./MarkdownText";

const MarkdownTextControl = ({ id, label, uischema }: ControlProps) => {
  return (
    <MarkdownText markdown={uischema.options?.markdown} id={id} label={label} />
  );
};

export default withJsonFormsControlProps(MarkdownTextControl);
