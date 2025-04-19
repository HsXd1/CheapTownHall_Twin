import Dashboard from "./views/Dashboard.js";
import Home from "./views/home.js";
import DuoPage from "./views/DuoPage.js";
import Reddit from "./views/reddit.js";
import TwinAcorn from "./views/TwinAcorn.js";

const navigateTo = url => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
		{ path: "/", view: Dashboard },
		{ path: "/duoPage", view: DuoPage },
		{ path: "/home", view: Home },
		{ path: "/reddit", view: Reddit},
		{ path: "/TwinAcorn", view: TwinAcorn},
	];

	// test each rout for potential match
	const potentialMatches = routes.map(route => {
		return {
			route: route,
			isMatch: location.pathname === route.path
		};
	});

	let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

	// if page not found, sent back to base page
	if (!match) {
		match = {
			route: routes[0],
			isMatch: true
		};
	}

	// displays view page
	const view = new match.route.view();

	document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

let match = false;
var bronconame, password;

// for clicking on text links
document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}

		if (e.target.id === "twin") {
			match = true;
		}
	});

	// for twin up button (login)
	document.body.addEventListener("submit", e => {
		if (e.target.id === "loginForm") {
			e.preventDefault();
			bronconame = document.getElementById("bronconame").value;
			password = document.getElementById("password").value;

			console.log("Stored user/pass:", bronconame, password);
			navigateTo("/duoPage");
		}
	});

	router();
});
