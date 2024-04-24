const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@chromatic-com/storybook",
  ],

  core: {},

  docs: {
    autodocs: "tag",
  },

  staticDirs: ["../public"],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};

export default config;
