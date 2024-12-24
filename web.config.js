const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry file for your backend application
  target: 'node', // Since it's a Node.js app, target the node environment
  output: {
    path: path.resolve(__dirname, 'dist'), // Output directory for the bundled files
    filename: 'bundle.js', // Output file name
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Use Babel to transpile JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Install babel-loader if you're using it
        },
      },
    ],
  },
};
