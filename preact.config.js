import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import FileManagerPlugin from 'filemanager-webpack-plugin';

export default (config, env, helpers) => {
  // inline all styles
  const { plugin } =
    helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
  if (plugin) {
    plugin.options.inlineSource = '.(css)$';
  }
  config.plugins.push(new HtmlWebpackInlineSourcePlugin());

  // File management
  config.plugins.push(
    new FileManagerPlugin({
      onStart: {
        delete: ['./build/*.*']
      },
      onEnd: {
        copy: [
          {
            source: './src/server.js',
            destination: env.dest + '/../server.js'
          },
          {
            source: './src/transcode.js',
            destination: env.dest + '/../transcode.js'
          }
        ]
      }
    })
  );

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
};
