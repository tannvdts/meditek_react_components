var path = require('path')
var webpack = require('webpack')
module.exports = {
  devtool: 'source-map', //http://stackoverflow.com/questions/30870830/how-do-i-generate-sourcemaps-when-using-babel-and-webpack
  entry: {
    'TestComponent-bk'     : path.join(process.cwd(), 'main/scripts/modules/TestInputText'),
    'TestComponent-bk2'     : path.join(process.cwd(), 'main/scripts/modules/TestDatePicker'),
    'TestComponent-bk3'     : path.join(process.cwd(), 'main/scripts/modules/Test'),
    'TestComponent-bk5'     : path.join(process.cwd(), 'main/scripts/modules/TestCheckbox'),
    'TestComponent-bk6'     : path.join(process.cwd(), 'main/scripts/modules/TestRadio'),
    'TestComponent-bk7'     : path.join(process.cwd(), 'main/scripts/modules/TestSelect'),
    'TestComponent-bk8'     : path.join(process.cwd(), 'main/scripts/modules/TestTextarea'),
    'TestComponent'     : path.join(process.cwd(), 'main/scripts/modules/TestModal'),

  },
  output: {
    path: './main/public/',
    publicPath: './main/public/',
    filename: '[name].js',
    chunkFilename: '[name]-[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel'
      },
      {test: /\.css$/, loader: "style-loader!css-loader"}
    ]
  },
  resolve: {
    /*alias: {
     'react': 'react-lite',
     'react-dom': 'react-lite'
     },*/
    root: [
      path.join(process.cwd(), 'shared')
    ]
  },
  plugins: [
    /*new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      comments: false,
      sourceMap: false,
      mangle: true,
      minimize: true
    })*/
  ]
}
