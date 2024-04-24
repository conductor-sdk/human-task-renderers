import { ControlProps } from "@jsonforms/core";
import VideoViewer, { VideoViewerProps } from "./VideoViewer";
import _omit from "lodash/omit";
import { withJsonFormsControlProps } from "@jsonforms/react";

const VideoViewerControl = ({ data, id, uischema }: ControlProps) => {
  const restProps: Partial<VideoViewerProps> = _omit(
    uischema?.options as VideoViewerProps,
    ["display", "readonly"]
  );
  return <VideoViewer value={data} id={id} {...restProps} />;
};

export default withJsonFormsControlProps(VideoViewerControl);
