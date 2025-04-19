import Dashboard from "./views/Dashboard.js";
import Home from "./views/home.js";

const navigateTo = url => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
		{ path: "/", view: Dashboard },
		{ path: "/login", view: () => console.log("viewing login") },
		{ path: "/home", view: Home },
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

// for clicking on text links
document.addEventListener("DOMContentLoaded", () => {
	document.body.addEventListener("click", e => {
		if (e.target.matches("[data-link]")) {
			e.preventDefault();
			navigateTo(e.target.href);
		}
	});

	router();
});