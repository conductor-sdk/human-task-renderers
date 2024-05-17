import { ControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import { MarkdownText } from "./MarkdownText";

const MarkdownTextControl = ({ id, label, data }: ControlProps) => {  
  return <MarkdownText markdown={data} id={id} label={label} />;
};


export default withJsonFormsControlProps(MarkdownTextControl);
