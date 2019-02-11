/**
 * Copyright (C) 2018 Juridoc
 * Backend GUI server.
 */
import * as Backend from '@singleware/backend';
import * as Default from './handler';

// Main application instance.
const application = new Backend.Main({});

// Setup the HTTP logger.
application.addLogger(Backend.Loggers.Console);

// Setup the HTTP server.
application.addService(Backend.Services.Server, {
  port: 8080,
  debug: true
});

// Setup the HTTP handler.
application.addHandler(Default.Handler, {
  strictType: true,
  baseDirectory: './frontend/public/',
  indexFile: `index.html`,
  types: {
    html: 'text/html',
    css: 'text/css',
    js: 'application/javascript',
    jpg: 'image/jpeg',
    png: 'image/png',
    svg: 'text/html+svg',
    woff: 'application/font-woff',
    woff2: 'font/woff2',
    eot: 'application/vnd.ms-fontobject',
    ttf: 'application/font-sfnt'
  }
});

// Start listening.
application.start();
