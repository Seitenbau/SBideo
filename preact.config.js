export default config => {
  if (config.devServer) {
    config.devServer.proxy = [
      {
        path: '/items.json',
        target: 'http://localhost:3000/items.json'
      },
      {
        path: '/octicons/**',
        target: 'http://localhost:3000'
      }
    ];
  }
};
