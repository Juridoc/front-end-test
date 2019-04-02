/*
 * Copyright (C) 2018-2019 Juridoc
 * Default handler.
 */
import * as Class from '@singleware/class';
import * as Frontend from '@singleware/frontend';

import * as Form from './form';

/**
 * Default handler class.
 */
@Class.Describe()
export class Handler extends Class.Null {
  /**
   * Default action.
   * @param match Matched route.
   */
  @Class.Public()
  @Frontend.Main.Processor({ path: '/' })
  public async defaultAction(match: Frontend.Match): Promise<void> {
    match.detail.output.content = new Form.View();
  }
}
