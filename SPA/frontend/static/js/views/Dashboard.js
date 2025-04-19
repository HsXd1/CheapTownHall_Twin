import Abstract from "./Abstract.js";

export default class extends Abstract {
	constructor() {
		super();
		this.setTitle("Login");
	}

	// this is what you see on the web page
	async getHtml() {
		return `
		<html lang="en">
		<head>
		<meta charset="UTF-8">
		<title>Let's Twin Login</title>
			<link href="https://fonts.googleapis.com/css2?family=Delicious+Handrawn&display=swap" rel="stylesheet">
		<style>
			label {
			display: block;
			margin: 1rem 0 0.5rem;
			font-size: 1.2rem;
			}

			input[type="text"],
			input[type="password"] {
			width: 250px;
			padding: 0.5rem;
			font-size: 1.2rem;
			border: none;
			border-radius: 4px;
			text-align: center;
			font-family: 'Patrick Hand', cursive;
			}
		</style>
		</head>
			<div class="login-container">
				<h1>Let's Twin!</h1>
				<form id="loginForm" action="/duoPage">
				<label for="bronconame">Bronconame:</label>
				<input type="text" id="bronconame" name="bronconame" placeholder="...">

				<label for="password">Password:</label>
				<input type="password" id="password" name="password" placeholder="...">
				</form>
			</div>
			<div class="btn-wrapper">
				<button type="submit" class="btn">TWIN UP!</button>
			</div>
		</html>
        `;
	}
}