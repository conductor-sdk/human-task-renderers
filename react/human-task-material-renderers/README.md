# `@io-orkes/human-task-material-renderers-react`

`@io-orkes/human-task-material-renderers-react` is a custom library that extends the `@jsonforms/material-renderers` to provide custom renderers for human task forms. This library leverages Material UI components to deliver a seamless and responsive user interface for human task management within your applications.

## Features

- Custom renderers for JSON Forms using Material UI.
- Extends `@jsonforms/material-renderers` for additional functionality.
- Provides a set of predefined renderers for common form elements.
- Fully customizable and easy to integrate with existing applications.

## Installation

To install the library, use npm or yarn:

```bash
npm install @io-orkes/human-task-material-renderers-react
```

or

```bash
yarn add @io-orkes/human-task-material-renderers-react
```

You will also need to install the peer dependencies if they are not already installed:

```bash
npm install @jsonforms/core @jsonforms/react @mui/material @emotion/react @emotion/styled
```

or

```bash
yarn add @jsonforms/core @jsonforms/react @mui/material @emotion/react @emotion/styled
```

## Usage

Here’s an example of how to use `@io-orkes/human-task-material-renderers-react` in your project.

### Basic Setup

1. **Import the necessary components:**

   ```jsx
   import React from "react";
   import { JsonForms } from "@jsonforms/react";
   import { humanTaskRenderers } from "@io-orkes/human-task-material-renderers-react";
   import { useState } from "react";
   ```

2. **Create a JSON schema and UISchema:**

   ```jsx
   const schema = {
     type: "object",
     properties: {
       name: {
         type: "string",
         title: "Name",
       },
       description: {
         type: "string",
         title: "Description",
       },
     },
   };

   const uischema = {
     type: "VerticalLayout",
     elements: [
       {
         type: "Control",
         scope: "#/properties/name",
       },
       {
         type: "Control",
         scope: "#/properties/description",
       },
     ],
   };
   ```

3. **Create a component to render the form:**

   ```jsx
   const HumanTaskForm = () => {
     const [data, setData] = useState({});

     return (
       <JsonForms
         schema={schema}
         uischema={uischema}
         data={data}
         renderers={humanTaskRenderers}
         cells={humanTaskMaterialCells}
         onChange={({ data }) => setData(data)}
       />
     );
   };

   export default HumanTaskForm;
   ```

4. **Use the component in your application:**

   ```jsx
   import React from "react";
   import ReactDOM from "react-dom";
   import HumanTaskForm from "./HumanTaskForm";

   const App = () => (
     <div>
       <h1>Human Task Form</h1>
       <HumanTaskForm />
     </div>
   );

   ReactDOM.render(<App />, document.getElementById("root"));
   ```

### Custom Renderers

You can extend or customize the provided renderers by creating your own renderer components and registering them with `JsonForms`.

1. **Create a custom renderer:**

   ```jsx
   import React from "react";
   import { withJsonFormsControlProps } from "@jsonforms/react";
   import { TextField } from "@mui/material";

   const CustomTextRenderer = ({ data, handleChange, path }) => (
     <TextField
       label="Custom Text"
       value={data || ""}
       onChange={(event) => handleChange(path, event.target.value)}
     />
   );

   export default withJsonFormsControlProps(CustomTextRenderer);
   ```

2. **Register the custom renderer:**

   ```jsx
   import { rankWith, isStringControl } from "@jsonforms/core";
   import CustomTextRenderer from "./CustomTextRenderer";

   const customRenderers = [
     { tester: rankWith(5, isStringControl), renderer: CustomTextRenderer },
   ];
   ```

3. **Include the custom renderer in your `JsonForms` component:**

   ```jsx
   <JsonForms
     schema={schema}
     uischema={uischema}
     data={data}
     renderers={[...humanTaskRenderers, ...customRenderers]}
     cells={materialCells}
     onChange={({ data }) => setData(data)}
   />
   ```

## Contributing

We welcome contributions to `@io-orkes/human-task-material-renderers-react`. If you have any issues or feature requests, please open an issue on our [GitHub repository](https://github.com/conductor-sdk/human-task-renderers).

## License

This library is licensed under the Apache-2.0 License. See the [LICENSE](LICENSE) file for more details.

---

This `README.md` provides an overview of how to install, use, and extend the `@io-orkes/human-task-material-renderers-react` library. For more detailed documentation and examples, please refer to the project's [GitHub repository](https://github.com/conductor-sdk/human-task-renderers).
