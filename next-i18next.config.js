const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
    domains: [
      {
        domain: "localhost",
        defaultLocale: "en",
      },
    ],
  },
  localPath: path.resolve('./public/locales')
};
