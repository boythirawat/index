// Xampp
let subFolder = 'index'
let page = window.location.pathname.split(subFolder)[1].slice(1)

// Server
// let page = window.location.pathname.slice(1)

let routes = [
	{page: 'home', path: './pages/home.html'},
	{page: 'login', path: './pages/login.html'},
	{page: 'admin', path: './pages/admin.html'},
]

Routing(page, routes)

function rendePage(element, path) {
	var xhttp;
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

function Routing(page, routes) {
  let route = routes.find(x => x.page == page)
  if (!route) window.location.replace('home');
  rendePage($('#content'), route.path)
}