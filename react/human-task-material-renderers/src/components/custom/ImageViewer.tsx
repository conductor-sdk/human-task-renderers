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


import { Box, FormControl } from "@mui/material";
import _isEmpty from "lodash/isEmpty";
export interface ImageViewerProps {
  id?: string;
  value?: string;
  height?: number;
  width?: number;
  label?: string;
  defaultUrl?: string;
}

const ImageViewer: React.FC<ImageViewerProps> = ({
  id,
  value,
  height,
  width,
  defaultUrl,
}) => {
  const url = _isEmpty(value) ? defaultUrl : value;
  return (
    <FormControl fullWidth>
      <Box
        key={id}
        justifyContent="center"
        alignItems={"center"}
        sx={{ display: "flex" }}
      >
        {url ? (
          <img
            src={url}
            height={height}
            width={width}
            alt=""
            style={{ maxWidth: "100%" }}
          />
        ) : (
          " No Image to preview"
        )}
      </Box>
    </FormControl>
  );
};

export default ImageViewer;
