Package.describe({
  name: 'adain:meteor-ses-email',
  summary: "Send email aws ses",
  version: "1.0.0",
  git: 'https://github.com/ADAIN/meteor-ses-email',
  documentation: 'README.md'
});

Npm.depends({
  // Pinned at older version. 0.1.16+ uses mimelib, not mimelib-noiconv which is
  // much bigger. We need a better solution.
  mailcomposer: "0.1.15",
  simplesmtp: "0.3.10",
  "nodemailer-ses-transport": '1.3.0',
  "stream-buffers": "0.2.5"});

Package.onUse(function (api) {
  api.use('underscore@1.0.4', 'server');
  api.use('epaminond:nodemailer@1.4.0', 'server');
  api.export('Email', 'server');
  api.addFiles('email.js', 'server');
});
