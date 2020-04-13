import path from 'path';

const config = {
  next: {
    dev: false,
    dir: path.join(process.cwd(), './client'),
    quiet: true,
    conf: {
      assetPrefix: 'http://127.0.0.1:3000',
    },
  },
};

export default config;
