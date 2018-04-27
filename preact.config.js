import HtmlWebpackInlineSourcePlugin from 'html-webpack-inline-source-plugin';
import FileManagerPlugin from 'filemanager-webpack-plugin';

export default (config, env, helpers) => {
  const fileManagerPluginOptions = {};

  if (process.env.NODE_ENV === 'production') {
    // inline all styles
    const { plugin } =
      helpers.getPluginsByName(config, 'HtmlWebpackPlugin')[0] || {};
    if (plugin) {
      plugin.options.inlineSource = '.(css)$';
    }
    config.plugins.push(new HtmlWebpackInlineSourcePlugin());

    // File management
    fileManagerPluginOptions.onStart = {
      delete: ['./build/*.*'],
      copy: []
    };
    fileManagerPluginOptions.onEnd = {
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
    };
  }

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

  // Remove loaders to implement own svg loader
  const loader =
    process.env.NODE_ENV === 'production'
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
          loader: require.resolve('file-loader'),
          options: {
            name: 'svgs/[name].[hash:8].[ext]'
          }
        }
      ]
    },
    {
      test: /\.(woff2?|ttf|eot|jpe?g|png|gif|mp4|mov|ogg|webm)(\?.*)?$/i,
      loader: 'file-loader'
    }
  );

  let API_URL;

  // Configure demo mode
  if (process.env.PUBLISH_ENV === 'github') {
    API_URL = '/SBideo/items-demo.json';
    config.output.publicPath = '/SBideo/';

    fileManagerPluginOptions.onStart.copy.push({
      source: './data-clientdemo',
      destination: env.dest
    });
  }
  config.plugins.push(new FileManagerPlugin(fileManagerPluginOptions));

  config.plugins.push(
    new helpers.webpack.DefinePlugin({
      'process.env.API_URL': JSON.stringify(API_URL || '/items.json'),
      'process.env.ASSET_PATH': JSON.stringify(
        (config.output.publicPath || '/') + 'assets/'
      )
    })
  );
};
