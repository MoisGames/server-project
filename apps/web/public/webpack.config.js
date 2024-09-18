const path = require('path');

module.exports = {
  entry: './apps/web/public/src/app.module.js',
  mode: 'production',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, '..', '..', '..', '/apps/web/public/dist'),
    clean: true,
  },
  resolve: {
    extensions: ['.pug', '.css', '.ts', '.js'],
    preferRelative: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.pug$/,
        use: ['@webdiscus/pug-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.ts$/,
        use: ['ts-loader'],
        exclude: /node_modules/,
      },
    ],
  },
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  watchOptions: {
    ignored: /node_modules/,
    poll: true,
  },
};

// module.exports = {
//   // ...
//   entry: './apps/web/public/src/app.module.js',
//   mode: 'development',
//   devServer: {
//       historyApiFallback: true,
//       contentBase: path.resolve(__dirname, '..', '..', '..', '/apps/web/public/dist'), 
//       open: true,
//       compress: true,
//       hot: true,
//       port: 8080,
//   },
//   plugins: [
//       // ...
//       // применять изменения только при горячей перезагрузке
//       new webpack.HotModuleReplacementPlugin(),
//   ],
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       {
//         test: /\.pug$/,
//         use: ['@webdiscus/pug-loader'],
//       },
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         loader: 'babel-loader',
//       },
//       {
//         test: /\.ts$/,
//         use: ['ts-loader'],
//         exclude: /node_modules/,
//       },
//     ],
//   },
// } Попытка создания dev mode