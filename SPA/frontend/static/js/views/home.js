import Abstract from './Abstract.js'

export default class extends Abstract {
  constructor () {
    super()
    this.setTitle('Home')
  }

  // this is what you see on the web page
  async getHtml () {
    return `
		<div class="card">
 		<h1 class="title">TWIN!</h1>
			<div class="company">Lazarus</div>
			<div class="logo">
			<img src="https://s3.amazonaws.com/handshake.production/app/public/assets/institutions/362871/original/hs-emp-logo-data.?1681487710" alt="Company Logo" />
		</div>
		<div class="role">Software Engineer - Summer Internship</div>
		<div class="pay-label">Pay:</div>
		<div class="pay">$30/hr</div>
			<div class="tags">
				<span>📍 Los Angeles</span>
				<span>🛂 US Auth.</span>
				<span>👤 Remote</span>
				<span>💻 Computer Science</span>
			</div>
		<div class="buttons">
	<a href="/reddit" class="nah" data-link>NAH!</a>
	<a href="/TwinAcorn" id="twin" class="twin" data-link>TWIN!</a>
  </div>
</div>
	   `
  }
}
