const conf = {
  webpack: (config: any) => {
    // only build in node
    config.externals = config.externals || [];
    config.externals.push('log4js');

    return config;
  },
};

module.exports = {
  pageExtensions: ['tsx', 'jsx', 'js', 'ts'],
  ...conf,
};
