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
import {
  FormControlLabel,
  RadioGroup as RadioGroupMUI,
  Radio,
} from "@mui/material";

export interface RadioGroupProps {
  id?: string;
  label?: string;
  value?: string;
  default?: string;
  required?: boolean;
  readonly?: boolean;
  path: string;
  options: string[];
  handleChange?: (path: string, value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
  id,
  value,
  label,
  default: defaultValue,
  required,
  readonly,
  path,
  options,
  handleChange,
}) => {
  return (
    <FormControlLabel
      id={id}
      labelPlacement="top"
      required={required}
      control={
        <RadioGroupMUI
          row
          aria-labelledby="human-radio-group"
          name="activeRadioGroup"
          value={value ? value : defaultValue}
          onChange={(e) => handleChange?.(path, e.target.value)}
        >
          {options.map((item, index) => (
            <FormControlLabel
              key={index}
              value={item}
              control={<Radio />}
              label={item}
              disabled={readonly}
            />
          ))}
        </RadioGroupMUI>
      }
      label={label}
      sx={{
        alignItems: "baseline",
        marginLeft: 0,
        "& .MuiFormControlLabel-label": {
          color: "rgba(0, 0, 0, 0.6)",
          fontWeight: 400,
          fontSize: "1rem",
        },
        "& .MuiFormControlLabel-root .MuiFormControlLabel-label": {
          fontWeight: 400,
          fontSize: "1rem",
          color: "#1A1E23",
        },
      }}
    />
  );
};

export default RadioGroup;
