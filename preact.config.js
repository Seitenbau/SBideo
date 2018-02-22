import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default (config, env, helpers) => {
  const isProd =
    process.env.NODE_ENV === 'production' ||
    process.env.NODE_ENV === 'clientdemo';

  // inline all styles
  const { plugin } =
    helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
  if (plugin) {
    plugin.options.inlineSource = '.(css)$';
  }
  config.plugins.push(new HtmlWebpackInlineSourcePlugin());

  if (config.devServer) {
    config.devServer.proxy = [
      {
        path: '/items.json',
        target: 'http://localhost:3000/items.json'
      },
      {
        path: '/data/**',
        target: 'http://localhost:3000'
      }
    ];
  }

  // Remove url loaders to implement own svg loader
  // const loader = helpers.getLoadersByName(config, 'url-loader');
  const loader = isProd
    ? helpers.getLoadersByName(config, 'file-loader')
    : helpers.getLoadersByName(config, 'url-loader');

  if (loader.length > 0 && loader[0]['ruleIndex']) {
    config.module.loaders.splice(loader[0]['ruleIndex'], 1);
  }

  config.module.loaders.push(
    {
      test: /\.svg$/,
      use: [
        {
          loader: 'svgr/webpack'
        },
        {
          loader: require.resolve(isProd ? 'file-loader' : 'url-loader'),
          options: {
            name: '[name].[hash:8].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i,
      loader: isProd ? 'file-loader' : 'url-loader'
    }
  );

  let API_URL;

  // Configure demo mode
  if (process.env.NODE_ENV === 'clientdemo') {
    API_URL = '/SBideo/items-demo.json';
    config.output.publicPath = '/SBideo/';

    config.plugins.push(
      new CopyWebpackPlugin([
        { context: `${__dirname}/data-clientdemo`, from: `*.*` }
      ])
    );
  }

  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(API_URL || '/items.json'),
      'process.env.ASSET_PATH': JSON.stringify(config.output.publicPath || '/')
    })
  );
};
