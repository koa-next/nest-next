const conf = {
  webpack: (config: any) => {
    // only build in node
    config.externals = config.externals || [];
    config.externals.push('log4js');

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
