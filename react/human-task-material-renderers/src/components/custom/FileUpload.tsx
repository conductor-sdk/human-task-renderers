import AttachIcon from "@mui/icons-material/AttachFile";
import Attachment from "@mui/icons-material/Attachment";
import DeleteIcon from "@mui/icons-material/DeleteOutline";
import GifIcon from "@mui/icons-material/Gif";
import ImageIcon from "@mui/icons-material/Image";
import PdfIcon from "@mui/icons-material/PictureAsPdf";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import React from "react";

export interface UploadButtonProps {
  id?: string;
  value?: string;
  onChange: (newValue?: string) => void;
  accept?: string;
}

const SUPPORTED_MIME_TYPES = {
  "image/png": <ImageIcon />,
  "image/jpeg": <ImageIcon />,
  "image/gif": <GifIcon />,
  "image/svg+xml": <ImageIcon />,
  "application/pdf": <PdfIcon />,
};

const getMimeTypeFromBase64 = (base64Data: string): string | undefined => {
  const maybeMimeMatches = base64Data.match(/^data:([A-Za-z-+/]+);/);
  if (maybeMimeMatches && maybeMimeMatches.length >= 1) {
    const match = maybeMimeMatches[1];
    return match;
  }
  return undefined;
};

const base64ToIcon = (base64ToIcon: string): JSX.Element => {
  const mimeType = getMimeTypeFromBase64(base64ToIcon);
  const supportedType = mimeType as keyof typeof SUPPORTED_MIME_TYPES;
  return mimeType && SUPPORTED_MIME_TYPES[supportedType] ? (
    SUPPORTED_MIME_TYPES[supportedType]
  ) : (
    <Attachment />
  );
};

const FileUpload: React.FC<UploadButtonProps> = ({
  // id: _id,
  value,
  accept = "*",
  onChange,
}) => {
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const firstFile = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(firstFile);
      reader.onload = () => {
        onChange(reader.result as string);
      };
    }
  };

  return value == null ? (
    <Button color="secondary" component="label">
      <AttachIcon />
      File Upload
      <input hidden accept={accept} type="file" onChange={handleFileChange} />
    </Button>
  ) : (
    <Stack flexDirection="row" gap={2} flexWrap="wrap">
      <Button color="secondary" component="label">
        {base64ToIcon(value)}
        Change File
        <input hidden accept={accept} type="file" onChange={handleFileChange} />
      </Button>
      <Button color="secondary" onClick={() => onChange(undefined)}>
        <DeleteIcon />
      </Button>
    </Stack>
  );
};

export default FileUpload;
