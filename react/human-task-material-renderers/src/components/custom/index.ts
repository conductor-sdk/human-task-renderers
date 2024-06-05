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

import {
  materialCells,
  materialRenderers,
} from "@jsonforms/material-renderers";

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

export const humanTaskCells = materialCells;

export const humanTaskRenderers = [
  ...materialRenderers,
  { tester: DescriptionTextTester, renderer: DescriptionTextControl },
  { tester: ImageViewerTester, renderer: ImageViewerControl },
  { tester: VideoViewerTester, renderer: VideoViewerControl },
  { tester: BooleanTester, renderer: BooleanControl },
  { tester: MarkdownTextTester, renderer: MarkdownTextControl },
  { tester: FileUploadTester, renderer: FileUploadControl },
];
