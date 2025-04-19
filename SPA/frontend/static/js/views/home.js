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
			<div class="company">Acorns</div>
			<div class="logo">
			<img src="https://media.licdn.com/dms/image/v2/C4D0BAQFPCL6sas4iAQ/company-logo_200_200/company-logo_200_200/0/1646339254391/acorns_grow_inc__logo?e=2147483647&v=beta&t=ZBdWPFVPINmtRLLxziIlvImQuASxJFJcZH3hXoufjfA" alt="Company Logo" />
		</div>
		<div class="role">Software Developer Intern</div>
		<div class="pay-label">Pay:</div>
		<div class="pay">$25/hr</div>
			<div class="tags">
				<span>📍 Los Angeles</span>
				<span>🛂 US Auth.</span>
				<span>👤 In Person</span>
				<span>💻 Computer Science</span>
			</div>
		<div class="buttons">
	<a href="/home" class="nah" data-link>NAH!</a>
	<a href="/info" id="twin" class="twin" data-link>TWIN!</a>
  </div>
</div>
	   `
	}
}
