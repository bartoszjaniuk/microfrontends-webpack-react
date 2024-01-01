import path from 'path';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

import { NodeEnvironment, appPaths } from '../config/setup';
import { getModes, getModuleRules, getWebpackPlugins, useConfig } from '../config/utils';

import { Configuration } from './interfaces';

export default (mode: NodeEnvironment) => {
  // TODO: MAKE USE OF IT
  const { isProd, isDev } = getModes(mode);

  const config: Configuration = {
    mode, // performance CHECK THIS
    devServer: useConfig(isDev, {
      // HOT MODULE REPLACEMENT
      hot: true,
      open: true,
    }),
    // The overall purpose of this resolve configuration is to simplify import statements
    //and provide explicit paths for certain dependencies,
    //helping webpack resolve modules more efficiently.
    //It also helps in avoiding long and relative import paths by
    //setting up aliases for commonly used directories.
    resolve: {
      alias: {
        src: appPaths.src,
        react: path.resolve('node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
        'react-router-dom': path.resolve('./node_modules/react-router-dom'),
        'styled-components': path.resolve('./node_modules/styled-components'),
        '@tanstack/react-query': path.resolve('./node_modules/@tanstack/react-query'),
      },
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    devtool: isProd ? 'cheap-module-source-map' : 'source-map', // it's helpful for debugging code
    entry: appPaths.entry,
    output: {
      path: appPaths.dist,
      filename: 'bundle.js',
    },
    module: {
      rules: [...getModuleRules(mode)],
    },
    optimization: {
      minimize: isProd,
      // I can omit the TerserPlugin as it's now built into Webpack 5
      minimizer: [new CssMinimizerPlugin()],
    },
    plugins: [...getWebpackPlugins(isDev)],
  };

  return config;
};
