import { ControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import _omit from "lodash/omit";
import ImageViewer, { ImageViewerProps } from "./ImageViewer";

const ImageViewerControl = ({ data, id, uischema }: ControlProps) => {
  const restProps: Partial<ImageViewerProps> = _omit(
    uischema?.options as ImageViewerProps,
    ["display", "readonly"]
  );
  return <ImageViewer value={data} id={id} {...restProps} />;
};

export default withJsonFormsControlProps(ImageViewerControl);
