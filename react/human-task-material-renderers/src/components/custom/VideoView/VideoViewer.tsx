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


import { Box, Stack, FormControl } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import _isEmpty from "lodash/isEmpty";

export interface VideoViewerProps {
  id?: string;
  value?: string;
  height?: number;
  width?: number;
  defaultUrl?: string;
}

const VideoViewer: React.FC<VideoViewerProps> = ({
  id,
  value,
  height,
  width,
  defaultUrl,
}) => {
  const url = _isEmpty(value) ? defaultUrl : value;
  return (
    <FormControl fullWidth>
      <Stack
        key={id}
        justifyContent="center"
        alignItems={"center"}
        spacing={2}
        direction="column"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            maxWidth: "100%",
            ">div": {
              maxWidth: "600px ",
              maxHeight: "500px",
            },
          }}
        >
          {url ? (
            <ReactPlayer
              url={url}
              controls={true}
              width={`${width}px` || "500px"}
              height={`${height}px` || "500px"}
            />
          ) : (
            " No video to play"
          )}
        </Box>
      </Stack>
    </FormControl>
  );
};

export default VideoViewer;
