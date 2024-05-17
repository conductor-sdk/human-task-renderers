import { FunctionComponent } from "react";
import {
  JsonForms,
  JsonFormsReactProps,
  JsonFormsInitStateProps,
} from "@jsonforms/react";
import { HumanTaskTemplate } from "@io-orkes/conductor-javascript";
import { JsonSchema, UISchemaElement } from "@jsonforms/core";

type HumanTaskFormProps = Omit<JsonFormsInitStateProps, "schema" | "uiSchema"> &
  JsonFormsReactProps & {
    template: HumanTaskTemplate;
  };

export const HumanTaskForm: FunctionComponent<HumanTaskFormProps> = ({
  template,
  ...props
}) => {
  return (
    <JsonForms
      schema={template.jsonSchema as JsonSchema}
      uischema={template.jsonSchema as UISchemaElement}
      {...props}
    />
  );
};
