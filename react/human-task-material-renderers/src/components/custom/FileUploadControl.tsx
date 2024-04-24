import { ControlProps } from "@jsonforms/core";
import { withJsonFormsControlProps } from "@jsonforms/react";
import FileUpload from "./FileUpload";

const FileUploadControl = ({
  data,
  handleChange,
  path,
  id,
  uischema,
}: ControlProps) => {
  return (
    <FileUpload
      onChange={(newValue?: string) => handleChange(path, newValue)}
      id={id}
      value={data}
      accept={uischema.options?.accept}
    />
  );
};

export default withJsonFormsControlProps(FileUploadControl);
