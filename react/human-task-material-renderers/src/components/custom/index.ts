import DescriptionTextControl from "./DescriptionTextControl";
import DescriptionTextTester from "./DescriptionTextTester";
import ImageViewerControl from "./ImageViewerControl";
import ImageViewerTester from "./ImageViewerTester";
import VideoViewerControl from "./VideoView/VideoViewerControl";
import VideoViewerTester from "./VideoView/VideoViewerTester";
import BooleanTester from "./Boolean/BooleanTester";
import BooleanControl from "./Boolean/BooleanControl";
import MarkdownTextControl from "./MarkdownText/MarkdownTextControl";
import MarkdownTextTester from "./MarkdownText/MarkdownTextTester";
import FileUploadControl from "./FileUploadControl";
import FileUploadTester from "./FileUploadTester";

export {
  DescriptionTextControl,
  ImageViewerControl,
  VideoViewerControl,
  BooleanControl,
  MarkdownTextControl,
  FileUploadControl,
};
export {
  DescriptionTextTester,
  ImageViewerTester,
  VideoViewerTester,
  BooleanTester,
  MarkdownTextTester,
  FileUploadTester,
};

export const humanTaskRenderers = [
  { tester: DescriptionTextTester, renderer: DescriptionTextControl },
  { tester: ImageViewerTester, renderer: ImageViewerControl },
  { tester: VideoViewerTester, renderer: VideoViewerControl },
  { tester: BooleanTester, renderer: BooleanControl },
  { tester: MarkdownTextTester, renderer: MarkdownTextControl },
  { tester: FileUploadTester, renderer: FileUploadControl },
];
