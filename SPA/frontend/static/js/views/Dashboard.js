import Abstract from "./Abstract.js";

export default class extends Abstract {
    constructor() {
        super();
        this.setTitle("Dashboard");
    }

    // this is what you see on the web page
    async getHtml() {
        return `
            <h1>Welcome back</h1>
            <p>
                hi
            </p>
        `;
    }
}