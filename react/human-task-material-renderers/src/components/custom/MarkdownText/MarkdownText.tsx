import React from "react";
import _isUndefined from "lodash/isUndefined";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/vs.css";

export interface MarkdownTextProps {
  id?: string;
  label?: string;
  markdown?: string;
}

export const MarkdownText: React.FC<MarkdownTextProps> = ({
  id,
  markdown,
  label,
}) => {
  return (
    <Markdown key={id} rehypePlugins={[rehypeHighlight]}>
      {_isUndefined(markdown) ? label || "" : markdown}
    </Markdown>
  );
};
