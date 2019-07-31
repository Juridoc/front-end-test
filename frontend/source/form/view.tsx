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
   * Header component 
   * 
   */
	@Class.Private()
	private header: HTMLDivElement = (
		<div class="header">
			<img class="logo" src="/images/logo-colorful.png" />
		</div>
	) as HTMLDivElement;

  /**
   * Form element.
   */
  @Class.Private()
  private form: HTMLFormElement = (
    <form
			id="contact"
			class="form"
			// onSubmit={this.submitHandler.bind(this)}
			// onChange={this.handleChange.bind(this)}
		>
			<div class="form--flex">
				<div>
					<label for="firstname">First name</label>
					<input
						type="text"
						name="firstname"
						id="firstname"
						placeholder="First name"
						required
						// onBlur={this.handleBlur.bind(this)}
					/>
				</div>

				<div>
					<label for="lastname">Last name</label>
					<input type="text" id="lastname" name="lastname" 
					placeholder="Last Name" required />
				</div>
			</div>
			<label for="username">Username</label>
			<input name="username" type="text" id="username" 
			placeholder="Username" required />

			<label for="email">Email</label>
			<input
				name="email"
				type="email"
				id="email"
				placeholder="example@juridoc.io"
				// onBlur={this.handleBlur.bind(this)}
			/>

			<label id="phone">Phone</label>
			<input
				type="text"
				for="phone"
				name="phone"
				placeholder="example (11) 945687456"
				// onInput={this.handleInput.bind(this)}
			/>

			<div class="form--flex">
				<div>
					<label for="password">Password</label>
					<input type="password" 
					name="password1" 
					id="password1" 
					// onBlur={this.handleBlur.bind(this)} 
          />
				</div>
				<div>
					<label for="password2">Repeat password</label>
					<input type="password" name="password2" id="password2" />
				</div>
			</div>
			<button type="submit">Submit form</button>
		</form>
	) as HTMLFormElement;

  /**
   * View element.
   */
  @Class.Private()
	private skeleton: HTMLDivElement = (
		<div class="main">
			{/* {!this.toggle && <div>Campo obrigatorio</div>} */}
			{this.header}
			<div class="container">{this.form}</div>
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
