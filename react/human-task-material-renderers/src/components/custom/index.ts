import { materialRenderers } from "@jsonforms/material-renderers";
import { JsonFormsRendererRegistryEntry } from "@jsonforms/core";

import DescriptionTextControl from "./DescriptionTextControl";
import DescriptionTextTester from "./DescriptionTextTester";
import ImageViewerControl from "./ImageViewerControl";
import ImageViewerTester from "./ImageViewerTester";
import VideoViewerControl from "./VideoView/VideoViewerControl";
import VideoViewerTester from "./VideoView/VideoViewerTester";
import { DescriptionText } from "./DescriptionText";

export { DescriptionTextControl, ImageViewerControl, VideoViewerControl };

export {
  DescriptionText,
  DescriptionTextTester,
  ImageViewerTester,
  VideoViewerTester,
};

export const humanTaskRenderers: JsonFormsRendererRegistryEntry[] = [
  ...materialRenderers,
  { tester: DescriptionTextTester, renderer: DescriptionTextControl },
  { tester: ImageViewerTester, renderer: ImageViewerControl },
  { tester: VideoViewerTester, renderer: VideoViewerControl },
];
