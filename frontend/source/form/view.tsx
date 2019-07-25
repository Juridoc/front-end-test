/*!
 * Copyright (C) 2018-2019 Juridoc
 * Form page view structure.
 */
import * as Class from '@singleware/class';
import * as DOM from '@singleware/jsx';
import * as Control from '@singleware/ui-control';

/**
 * Form view class.
 */
@Class.Describe()
export class View extends Control.Component<{}> {
  /**
   * Form submit event handler.
   * @param event Event information.
   */
  @Class.Private()
  private submitHandler(event: Event): void {
    event.preventDefault();
    console.log('Form submitted');
  }

  /**
   * Form element.
   */
  @Class.Private()
  private form: HTMLFormElement = (
    <form class="form" onSubmit={this.submitHandler.bind(this)}>
      <div class="field">
        <label>First name:</label>
        <input type="text" />
      </div>
      <div class="field">
        <label>Last name:</label>
        <input type="text" />
      </div>
      <div class="field">
        <label>Username:</label>
        <input type="text" />
      </div>
      <div class="field">
        <label>Email:</label>
        <input type="text" />
      </div>
      <div class="field">
        <label>Phone:</label>
        <input type="text" />
      </div>
      <div class="field">
        <label>Password:</label>
        <input type="text" />
      </div>
      <button type="submit">Submit form</button>
    </form>
  ) as HTMLFormElement;

  /**
   * View element.
   */
  @Class.Private()
  private skeleton: HTMLDivElement = (
    <div class="panel">
      <img src="/images/logo-colorful.png" />
      {this.form}
    </div>
  ) as HTMLDivElement;

  /**
   * Default constructor.
   */
  public constructor() {
    super({});
    // Some initialization here...
  }

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLElement {
    return this.skeleton;
  }
}
