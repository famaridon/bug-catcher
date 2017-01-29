module.exports = {
  entry: "./src/ts/main.ts",
  output: {
    filename: "dist/js/bug-catcher.js"
  },
  resolve: {
    // Add '.ts' and '.tsx' as a resolvable extension.
    extensions: ["", ".webpack.js", ".web.js", ".ts", ".js"]
  },
  module: {
    loaders: [
      // all files with a '.ts' or '.tsx' extension will be handled by 'ts-loader'
      { test: /\.tsx?$/, loader: "ts-loader" },
      { test: /\.scss$/, loaders: ["style-loader", "css-loader", "sass-loader"] }
    ],
    sassLoader: {
      includePaths: ["./src/css"]
    }
  }
}
