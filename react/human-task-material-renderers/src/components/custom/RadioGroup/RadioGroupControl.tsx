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

import { ControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import RadioGroup, { RadioGroupProps } from "./RadioGroup";
import _omit from "lodash/omit";

type RadioGroupOptions = RadioGroupProps & {
  assignDefaultRadioValue: boolean;
};

const RadioGroupControl = ({
  data,
  id,
  label,
  handleChange,
  path,
  uischema,
  enabled,
  ...rest
}: ControlProps) => {
  const restProps: Partial<RadioGroupProps> = _omit(
    uischema?.options as RadioGroupOptions,
    ["assignDefaultRadioValue"]
  );
  const options = rest?.schema?.enum ?? [];
  return (
    <RadioGroup
      value={data}
      id={id}
      label={label}
      path={path}
      handleChange={handleChange}
      readonly={!enabled}
      options={options}
      {...restProps}
    />
  );
};

export default withJsonFormsControlProps(RadioGroupControl);
