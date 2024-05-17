import React from "react";
import _isUndefined from "lodash/isUndefined";
import { Checkbox, FormControlLabel } from "@mui/material";
export interface BooleanProps {
  id?: string;
  label?: string;
  value?: boolean;
  default?: boolean;
  required?: boolean;
  readonly?: boolean;
  path: string;
  handleChange?: (path: string, value: boolean) => void;
}

const Boolean: React.FC<BooleanProps> = ({
  id,
  value,
  label,
  default: defaultValue,
  required,
  readonly,
  path,
  handleChange,
}) => {
  return (
    <FormControlLabel
      key={id}
      label={label}
      control={<Checkbox />}
      onChange={(_, checked) => handleChange?.(path, checked)}
      checked={!_isUndefined(value) ? value : defaultValue}
      disabled={readonly}
      required={required}
    />
  );
};

export default Boolean;
