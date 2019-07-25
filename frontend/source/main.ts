/*!
 * Copyright (C) 2018-2019 Juridoc
 * Frontend client.
 */
import * as Class from '@singleware/class';
import * as Frontend from '@singleware/frontend';
import * as Default from './handler';

/**
 * Application class.
 */
@Class.Describe()
class Application extends Frontend.Main {
  /**
   * Default constructor.
   */
  constructor() {
    super({
      title: {
        text: 'Juridoc',
        separator: ' - '
      }
    });
    // Setup the browser service.
    this.addService(new Frontend.Services.Client({}));

    // Setup the page handler.
    this.addHandler(Default.Handler);

    // Start rendering.
    this.start();
  }
}

// Start the application
const instance = new Application();
