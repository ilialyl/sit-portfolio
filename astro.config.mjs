// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";
import { webcore } from "webcoreui/integration";

// https://astro.build/config
export default defineConfig({
  site: "https://ilialyl.github.io",
  base: "/sit-portfolio/",

  vite: {
    plugins: [tailwindcss()],
    ssr: {
      noExternal: ["webcoreui"],
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },

  integrations: [webcore(), icon()],
});
