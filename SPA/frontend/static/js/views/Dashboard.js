import Abstract from "./Abstract.js";

export default class extends Abstract {
	constructor() {
		super();
		this.setTitle("Login");
	}

	// this is what you see on the web page
	async getHtml() {
		return `
            <h1>login in here</h1>
        `;
	}
}