/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const Dotenv = require('dotenv-webpack');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = env => {
  const sdkVersion = process.env.npm_package_version;
  const dotenvPath = path.resolve(__dirname, `.env.${env.NODE_ENV}`);

  let sdkBundleName = 'cereSDK.js';

  return {
    entry: './src/index.ts',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: sdkBundleName,
      path: path.resolve(__dirname, 'dist', `v${sdkVersion}`),
      library: 'cereSDK',
      libraryTarget: 'umd',
    },
    plugins: [
      new CleanWebpackPlugin({cleanOnceBeforeBuildPatterns: [path.join(process.cwd(), 'dist/**/*')]}),
      new Dotenv({path: dotenvPath}),
    ],
  };
};
