const conf = {
  webpack: (config: any) => {
    // only build in node
    config.externals = config.externals || [];
    config.externals.push('log4js');

    config.plugins = config.plugins.filter((plugin: any) => {
      if (plugin.constructor.name === 'ForkTsCheckerWebpackPlugin') {
        return false;
      }
      return true;
    });

    return config;
  },
};

module.exports = {
  pageExtensions: ['tsx', 'jsx', 'js', 'ts'],
  ...conf,
};
