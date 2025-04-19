import Abstract from "./Abstract.js";

export default class extends Abstract {
	constructor() {
		super();
		this.setTitle("Login");
	}

	// this is what you see on the web page
	async getHtml() {
		// did not have enough time to sync up next and duo
		return `
			<h1> Look at your phone and press duo!~ </h1>
			<div class="buttons">
			<a href="/home" class="nah" data-link>Next</a>
 			 </div>
	   `;
	}
}