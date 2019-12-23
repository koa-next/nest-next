const conf = {};

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
