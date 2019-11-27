module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env']
					}
				}
      },
       { test: /\.css$/, loader: "style-loader!css-loader" },
       {
         test: /\.(pdf|jpg|png|gif|svg|ico)$/,
         use: [
           {
             loader: 'url-loader'
           },
         ]
       },
       {  
         test: /\.(woff|woff2|eot|ttf|otf)$/,
         loader: "file-loader"
       }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  }
  };