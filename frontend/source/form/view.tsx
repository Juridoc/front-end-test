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
  private async submitHandler(event: Event) {
    event.preventDefault();
    const { firstname, lastname, email, phone, 
    password1, password2 } = this.user;
		const url = 'https://test.juridoc.io/register';
		if (password1 !== password2) {
			return;
		}
		const userData = {
			firstname,
			lastname,
			email,
			phone,
			password1,
			password2
		};
		
			const config = {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(userData)
			};
			const response = await fetch(url, config)
				.then(response => response.json())
				.catch(e => {
					console.log('ERRO..', e)
				});		
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
			onSubmit={this.submitHandler.bind(this)}
			onChange={this.handleChange.bind(this)}
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
						onBlur={this.handleBlur.bind(this)}
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
				onBlur={this.handleBlur.bind(this)}
			/>

			<label id="phone">Phone</label>
			<input
				type="text"
				for="phone"
				name="phone"
				placeholder="example (11) 945687456"
				onInput={this.handleInput.bind(this)}
			/>

			<div class="form--flex">
				<div>
					<label for="password">Password</label>
					<input type="password" 
					name="password1" 
					id="password1" 
					onBlur={this.handleBlur.bind(this)} 
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
  public constructor(private masks?: any, private user?: any, 
		private toggle?: boolean | false ) {
		super({});
		// Some initialization here...
		this.user = {};
		this.masks = {
			phone(value?: any) {
				return value
					.replace(/\D/g, '')
					.replace(/(\d{2})(\d)/, '($1) $2')
					.replace(/(\d{4})(\d)/, '$1-$2')
					.replace(/(\d{4})-(\d)(\d{4})/, '$1$2-$3')
					.replace(/(-\d{4})\d+?$/, '$1');
			},
		};
  }
  
  // Event Mask Field
  @Class.Private()
	private handleInput(event: { target: HTMLInputElement }) {
		event.target.value = this.masks[event.target.name](event.target.value);
  }
  
  // Handleblur Listener
  @Class.Private()
	private handleBlur(event: { target: HTMLInputElement }) {
		let regex;

		// Validation name
		if (event.target.name === 'first-name') {
			regex = /^[A-Za-z0-9]+$/;
			if (!regex.test(event.target.value)) {
				console.log('O campo nome esta invalido');
			}
		}

		// Validation domain email
		if (event.target.name === 'email') {
			regex = /^[a-z0-9](\.?[a-z0-9]){5,}@juridoc\.io$/;
			if (!regex.test(event.target.value)) {
				console.log('Email invalido');
			}
		}

		if (event.target.name === 'password1') {
			if (event.target.value.length < 6) {
				console.log('senha precisa de 6 caracteres');	
			}
		}
	}

  //Change event field
	@Class.Private()
	private handleChange(event: { target: HTMLInputElement }) {
		this.user[event.target.name] = event.target.value;
	}

  /**
   * View element.
   */
  @Class.Public()
  public get element(): HTMLElement {
    return this.skeleton;
  }
}
