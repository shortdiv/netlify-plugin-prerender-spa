# Netlify Plugin - Prerender SPA

This is a [Netlify build plugin](https://www.netlify.com/build/plugins-beta?utm_source=github&utm_medium=plugin-htmlminifier-div&utm_campaign=devex) that prerenders pages in a SPA. Under the hood, the plugin uses [React-Snap](https://github.com/stereobooster/react-snap/), a zero-config framework-agnostic static prerendering library for SPAs.

## Installation

To include this plugin in your site deployment:


### 1. Add the plugin as a dependency

```bash

# Add the plugin as a dependency to your build
npm i --s netlify-plugin-prerender-spa

```


### 2. Add the plugin and its options to your netlify.toml

You can use the default options for prerendering or add customizations via the plugins inputs like so:

```toml

# Config for the Netlify Build Plugin: netlify-plugin-minify-html
[[plugins]]
package = "./netlify-plugin-prerender-spa"
  [plugins.inputs]
  source = "dist"
