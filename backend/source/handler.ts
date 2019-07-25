/*!
 * Copyright (C) 2018-2019 Juridoc
 * Default handler.
 */
import * as Class from '@singleware/class';
import * as Backend from '@singleware/backend';

/**
 * Default handler class.
 */
@Class.Describe()
export class Handler extends Backend.Handlers.File.Default {
  /**
   * Exception response processor.
   * @param match Matched route.
   */
  @Class.Public()
  @Backend.Processor({ path: '!', environment: { methods: 'GET' } })
  public async exceptionResponse(match: Backend.Types.Match): Promise<void> {
    await super.exceptionResponse(match);
  }

  /**
   * Default response processor.
   * @param match Matched route.
   */
  @Class.Public()
  @Backend.Processor({ path: '/', exact: false, environment: { methods: 'GET' } })
  public async defaultResponse(match: Backend.Types.Match): Promise<void> {
    await super.defaultResponse(match);
  }
}
