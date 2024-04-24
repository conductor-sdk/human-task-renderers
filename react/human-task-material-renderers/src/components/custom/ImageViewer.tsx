import { Box, FormControl } from "@mui/material";
import _isUndefined from "lodash/isUndefined";
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
  const url = _isUndefined(value) ? defaultUrl : value;
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
