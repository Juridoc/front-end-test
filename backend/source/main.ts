/*!
 * Copyright (C) 2018-2019 Juridoc
 * Backend GUI server.
 */
import * as Class from '@singleware/class';
import * as Backend from '@singleware/backend';
import * as Default from './handler';

/**
 * Backend application class.
 */
@Class.Describe()
class Application extends Backend.Main {
  /**
   * Default constructor.
   */
  constructor() {
    super({});
    // Setup the HTTP logger.
    this.addLogger(new Backend.Loggers.Console());

    // Setup the HTTP server.
    this.addService(
      new Backend.Services.Server({
        port: 8080,
        debug: true
      })
    );

    // Setup the HTTP handler.
    this.addHandler(Default.Handler, {
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
    this.start();
  }
}

// Start the application
const instance = new Application();
