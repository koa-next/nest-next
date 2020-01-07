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

export default {
  next: {
    dir: './client',
    dev: true,
    conf: {
      pageExtensions: ['tsx', 'jsx', 'js', 'ts'],
      ...conf,
    },
  },
};
