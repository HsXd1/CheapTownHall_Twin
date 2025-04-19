import Abstract from './Abstract.js'

export default class extends Abstract {
	constructor() {
		super()
		this.setTitle('Home')
	}

	// this is what you see on the web page
	async getHtml() {
		return `
		<div class="card">
		<h1 class="title">TWIN!</h1>
			<div class="company">Reddit</div>
			<div class="logo">
			<img src="https://redditinc.com/hs-fs/hubfs/Reddit%20Inc/Brand/Reddit_Logo.png" alt="Company Logo" />
		</div>
		<div class="role">Data Science AI Intern</div>
		<div class="pay-label">Pay:</div>
		<div class="pay">$25/hr</div>
			<div class="tags">
				<span>📍 New York</span>
				<span>🛂 US Auth.</span>
				<span>👤 In Person</span>
				<span>💻 Artificial Intelligence</span>
			</div>
		<div class="buttons">
	<a href="/home" class="nah" data-link>NAH!</a>
	<a id="twin" class="twin" data-link>TWIN!</a>
  </div>
</div>
	   `
	}
}
