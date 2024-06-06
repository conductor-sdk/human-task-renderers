/*
* Copyright 2024 Conductor Authors.
* <p>
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
* <p>
* http://www.apache.org/licenses/LICENSE-2.0
* <p>
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*/


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
