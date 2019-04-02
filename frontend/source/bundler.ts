/*
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Bundler from '@singleware/bundler';

// Compile the application bundle.
Bundler.compile({
  output: './frontend/release/index.js',
  sources: [
    {
      name: '@singleware/frontend',
      path: 'node_modules/@singleware/frontend',
      package: true
    },
    {
      name: '@singleware/ui-control',
      path: 'node_modules/@singleware/ui-control',
      package: true
    },
    {
      name: './form',
      path: './frontend/release/form'
    },
    {
      name: './main',
      path: './frontend/release/main.js'
    },
    {
      name: './handler',
      path: './frontend/release/handler.js'
    }
  ]
});
