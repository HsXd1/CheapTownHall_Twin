import Abstract from './Abstract.js'

export default class extends Abstract {
  constructor () {
    super()
    this.setTitle('Twinned ACORN!')
  }

  // this is what you see on the web page
  async getHtml () {
    return `
		<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>You Twinned!</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
	 font-family: 'Comic Sans MS', cursive, sans-serif;
      background-color: #292929;
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 40px 20px;
    }

    h1 {
      font-size: 3rem;
      margin-bottom: 20px;
      text-align: center;
    }

    .mission-box {
      background-color: #6cc24a;
      color: #000;
      padding: 15px 20px;
      border-radius: 10px;
      max-width: 350px;
      font-size: 0.95rem;
      text-align: center;
      margin-bottom: 30px;
    }

    .input-group {
      display: flex;
      align-items: center;
      background-color: #ccc;
      color: #000;
      padding: 10px;
      border-radius: 2px;
      margin-bottom: 15px;
      width: 250px;
    }

    .input-group i {
      margin-right: 10px;
    }

    .apply-btn {
      background-color: #6cf0d4;
      color: white;
      font-size: 1.8rem;
      font-weight: bold;
      border: none;
      border-radius: 20px;
      padding: 15px 50px;
      margin-top: 20px;
      cursor: pointer;
      transition: transform 0.2s ease;
    }

    .apply-btn:hover {
      transform: scale(1.05);
    }
  </style>
</head>
<body>

  <h1>You Twinned!</h1>

  <div class="mission-box">
    At Lazarus, we build foundation models to help people solve the world's toughest problems. E
    nterprise and government clients use our APIs to power products and workflows that keep humans
    focused on what we do best. We're a venture-backed team headquartered in the Boston, MA area, and we share a passion for innovation, growth, and a commitment to the responsible use of AI.</div>

  <div class="input-group">Location: Los Angeles</div>
  <div class="input-group">System: Remote</div>
  <div class="input-group">Requires: US Auth.</div>
  <div class="input-group">Major: Computer Science</div>

  <button class="apply-btn">APPLY!</button>

</body>
	   `
  }
}
