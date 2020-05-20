const { run } = require("react-snap");

module.exports = {
  onPostBuild: async({
    constants,
    inputs
  }) => {
    const source = inputs.source || "dist"
    const minifyHtml = inputs.minifyHtmlOpts || {
      "minifyHtml": {
        "collapseWhitespace": false,
        "removeComments": false
      }
    }
    await run({
      source,
      saveAs: "html",
      minifyHtml
    });
  }
}