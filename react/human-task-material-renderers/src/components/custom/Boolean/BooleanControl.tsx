import { ControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import Boolean, { BooleanProps } from "./Boolean";
import _omit from "lodash/omit";

type BooleanOptions = BooleanProps & {
  display: "description-text";
};

const BooleanControl = ({
  data,
  id,
  label,
  handleChange,
  path,
  uischema,
}: ControlProps) => {
  const restProps: Partial<BooleanProps> = _omit(
    uischema?.options as BooleanOptions,
    ["display"]
  );
  return (
    <Boolean
      value={data}
      id={id}
      label={label}
      path={path}
      handleChange={handleChange}
      {...restProps}
    />
  );
};

export default withJsonFormsControlProps(BooleanControl);
