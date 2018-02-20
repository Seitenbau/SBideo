import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default (config, env, helpers) => {
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
        path: '/octicons/**',
        target: 'http://localhost:3000'
      },
      {
        path: '/data/**',
        target: 'http://localhost:3000'
      }
    ];
  }

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
