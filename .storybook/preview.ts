import type { Preview } from "@storybook/react"

import "../styles/tailwind.css"

import { withThemeByClassName } from "@storybook/addon-styling"

/* TODO: update import to your tailwind styles file. If you're using Angular, inject this through your angular.json config instead */
// import "../src/index.css"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    withThemeByClassName({
      themes: {
        light: "light",
        dark: "dark",
      },
      defaultTheme: "light",
    }),
  ],
}

export default preview
