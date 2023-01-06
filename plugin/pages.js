class Route {
	x = 0
	routes = [
		{ page: 'home', path: './pages/home.html' },
		{ page: 'login', path: './pages/login.html' },
		{ page: 'admin', path: './pages/admin.html' },
	];

	constructor() {
		this.update();

		$('a.link').on('click', (el) => {
			this.page = el.target.getAttribute('data-page');
			this.update();
		});
	}

	update() {
		let route = this.routes.find((x) => x.page == this.page);
		if (!route) route = this.routes.find((x) => x.page == 'home');
		history.pushState(null, null, route.page);
		rendePage($('#content'), route.path);
	}

	getPage() {
		// Xampp
		let subFolder = 'index';
		let page = window.location.pathname.split(subFolder)[1].slice(1);

		// Server
		// let page = window.location.pathname.slice(1)

		return page;
	}
}

let routing = new Route();

function rendePage(element, path) {
	let xhttp;
	xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function () {
		if (this.readyState == 4) {
			if (this.status == 200) return element.html(this.responseText);
			if (this.status == 404) return element.html('Page not found.');
		}
	};
	xhttp.open('GET', path, true);
	xhttp.send();
	return;
}
