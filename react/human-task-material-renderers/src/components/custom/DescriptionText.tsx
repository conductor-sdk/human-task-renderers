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
import { FormControl, Typography } from "@mui/material";

export interface DescriptionTextProps {
  id?: string;
  value: string;
  align?: "left" | "center" | "right" | "justify" | "inherit";
  noWrap?: boolean;
  preWrap?: boolean;
  paragraph?: boolean;
  gutterBottom?: boolean;
  variant?:
    | "inherit"
    | "button"
    | "overline"
    | "caption"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2";
  label?: string;
}

export const DescriptionText: React.FC<DescriptionTextProps> = ({
  id,
  value,
  align = "inherit",
  gutterBottom = false,
  noWrap = false,
  preWrap = false,
  paragraph = false,
  label,
}) => {
  return (
    <FormControl>
      <Typography
        key={id}
        align={align}
        gutterBottom={gutterBottom}
        noWrap={noWrap}
        paragraph={paragraph}
        whiteSpace={preWrap ? "pre-wrap" : "normal"}
        sx={{ marginBottom: "4px" }}
      >
        {_isUndefined(value) ? label : value}
      </Typography>
    </FormControl>
  );
};
