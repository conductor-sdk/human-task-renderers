import { readFileSync, writeFileSync, readdirSync, lstatSync } from "fs";
import { join } from "path";

// Define the license header
const licenseHeader = `/*
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
`;

const licenseHeaderPattern =
  /\/\*[\s\S]*?Licensed under the Apache License[\s\S]*?\*\/\s*/;

const addLicenseHeaderToFile = (filePath) => {
  let fileContent = readFileSync(filePath, "utf8");

  // Remove existing license header if it matches the pattern
  if (licenseHeaderPattern.test(fileContent)) {
    fileContent = fileContent.replace(licenseHeaderPattern, "");
    console.log(`Removed existing license header from ${filePath}`);
  }

  // Add new license header
  const updatedContent = `${licenseHeader}\n\n${fileContent}`;
  writeFileSync(filePath, updatedContent, "utf8");
  console.log(`Added license header to ${filePath}`);
};

const processDirectory = (directory) => {
  readdirSync(directory).forEach((file) => {
    const fullPath = join(directory, file);
    if (lstatSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.match(/\.(js|ts|jsx|tsx|py|java|cpp|h)$/)) {
      // Add other extensions as needed
      addLicenseHeaderToFile(fullPath);
    }
  });
};

// Specify the root directory of your project
processDirectory("./src");
