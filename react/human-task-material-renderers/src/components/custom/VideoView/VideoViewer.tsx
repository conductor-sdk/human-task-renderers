import { Box, Stack, FormControl } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import _isUndefined from "lodash/isUndefined";

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
  const url = _isUndefined(value) ? defaultUrl : value;
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
