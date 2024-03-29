'use strict';
function AutoTyping(e) {

    let color = '#fff'

	let t,
		i = 0,
		l = 0,
		n = 0,
		s = !1,
		o = 1,
		p = null,
		r = 0,
		y = null;
	null != e.id
		? ((null != e.typeText && Array.isArray(e.typeText)) ||
				(console.log(
					'*AutoTyping* : (option "typeText") Must add Array vith string/s!'
				),
				(e.typeText = ['Welcome to AutoTyping'])),
		  (null != e.textColor && 'string' == typeof e.textColor) ||
				(e.textColor = color),
		  (null != e.typeSpeed && 'number' == typeof e.typeSpeed) ||
				(e.typeSpeed = 100),
		  (null != e.typeRandom &&
				0 != e.typeRandom &&
				'boolean' == typeof e.typeRandom) ||
				(e.typeRandom = !1),
		  (null != e.typeDelay && 'number' == typeof e.typeDelay) ||
				(e.typeDelay = 100),
		  (null != e.cursor && 'string' == typeof e.cursor) || (e.cursor = '|'),
		  (null != e.cursorColor && 'string' == typeof e.cursorColor) ||
				(e.cursorColor = color),
		  (null != e.cursorSpeed && 'number' == typeof e.cursorSpeed) ||
				(e.cursorSpeed = 300),
		  (null != e.deleteSpeed && 'number' == typeof e.deleteSpeed) ||
				(e.deleteSpeed = 50),
		  (null != e.deleteDelay && 'number' == typeof e.deleteDelay) ||
				(e.deleteDelay = 2e3),
		  null != e.textDeleteOptions && 'object' == typeof e.textDeleteOptions
				? (s = !0)
				: null != e.textDeleteOptions &&
				  'object' != typeof e.textDeleteOptions
				? (console.log(
						'*AutoTyping* : (option "textDeleteOptions") Must be Object!'
				  ),
				  (e.textDeleteOptions = null))
				: (e.textDeleteOptions = null),
		  null != e.callBack && 'object' == typeof e.callBack
				? ((p = e.callBack.method),
				  null != e.callBack.counter &&
						'number' == typeof e.callBack.counter &&
						(y = e.callBack.counter))
				: null != e.callBack &&
				  'object' != typeof e.callBack &&
				  console.log(
						'*AutoTyping* : (option "callBack") Must be Object!'
				  ),
		  null == e.typeInfinity ||
		  1 == e.typeInfinity ||
		  'boolean' != typeof e.typeInfinity
				? (e.typeInfinity = !0)
				: (e.typeInfinity = !1),
		  (this.typingElement = document.querySelector('#' + e.id)),
		  (this.typingArea = this.typingElement.appendChild(
				document.createElement('span')
		  )),
		  (this.cursor = this.typingElement.appendChild(
				document.createElement('span')
		  )),
		  (this.typeSpeed = e.typeSpeed),
		  (this.typeSpeedRandom = e.typeRandom),
		  (this.typingArea.style.color = e.textColor),
		  (this.cursor.style.color = e.cursorColor),
		  (this.cursor.innerHTML = e.cursor),
		  (this.cursorSpeed = e.cursorSpeed),
		  (this.typeText = e.typeText),
		  (this.deleteSpeed = e.deleteSpeed),
		  (this.deleteDelay = e.deleteDelay),
		  (this.typeDelay = e.typeDelay),
		  (this.typeInfinity = e.typeInfinity),
		  (this.callBack = p),
		  (this.userCounter = y),
		  (this.deleteOptions = e.textDeleteOptions),
		  (this.helpingElement = this.typingElement.appendChild(
				document.createElement('span')
		  )),
		  (this.helpingElement.innerHTML = '.'),
		  (this.helpingElement.style.visibility = 'hidden'),
		  (this.init = function () {
				let p = function () {
					r &&
						this.callBack &&
						((r = 0),
						this.callBack(this.userCounter),
						'number' == typeof this.userCounter &&
							(this.userCounter > 0
								? this.userCounter--
								: (this.userCounter = y)));
					clearInterval(t),
						(this.cursor.style.visibility = 'visible');
					let u = [],
						h = this.typeText[i].split('');
					s && (n = this.typeText.indexOf(this.typeText[l]));
					++i == this.typeText.length &&
						((i = 0), (o = this.typeInfinity ? 1 : 0));
					let c = function () {
						let i = h.shift();
						u.push(i),
							(this.typingArea.innerHTML += i),
							this.typeSpeedRandom
								? (this.typeSpeed += Math.floor(
										200 * Math.random()
								  ))
								: this.typeSpeed;
						let l = setTimeout(c, this.typeSpeed);
						if (((this.typeSpeed = e.typeSpeed), 0 == h.length)) {
							clearTimeout(l);
							let e = 0,
								i = function () {
									0 == e
										? ((this.cursor.style.visibility =
												'hidden'),
										  (e = 1))
										: ((this.cursor.style.visibility =
												'visible'),
										  (e = 0));
								}.bind(this);
							(t = setInterval(i, this.cursorSpeed)),
								setTimeout(d, this.deleteDelay);
						}
					}.bind(this);
					c();
					let d = function () {
						clearInterval(t),
							(this.cursor.style.visibility = 'visible'),
							u.pop();
						let e = '';
						for (let t = 0; t < u.length; t++) e += u[t];
						if (((this.typingArea.innerHTML = e), s && n == l))
							for (let e in this.deleteOptions)
								if (
									e == n &&
									this.deleteOptions[e].deleteToChar ==
										u.length
								)
									return (
										(h =
											this.deleteOptions[
												e
											].continueThis.split('')),
										n++,
										void setTimeout(
											c,
											this.typeSpeedRandom
												? (this.typeSpeed += Math.floor(
														200 * Math.random()
												  ))
												: this.typeSpeed
										)
									);
						let i = setTimeout(d, this.deleteSpeed);
						if (0 == u.length) {
							clearTimeout(i);
							let e = 0,
								s = function () {
									0 == e
										? ((this.cursor.style.visibility =
												'hidden'),
										  (e = 1))
										: ((this.cursor.style.visibility =
												'visible'),
										  (e = 0));
								}.bind(this);
							if (
								((t = setInterval(s, this.cursorSpeed)),
								!this.typeInfinity && !o)
							)
								return (
									clearInterval(t),
									void (this.cursor.style.visibility =
										'hidden')
								);
							this.callBack && r++,
								(n = ++l),
								l == this.typeText.length && (l = 0),
								setTimeout(p, this.typeDelay);
						}
					}.bind(this);
				}.bind(this);
				return p(), this;
		  }),
		  (this.stop = function () {
				this.typeInfinity = !1;
		  }))
		: (this.init = function () {
				console.log(
					'*AutoTyping* : (option "id") Must add element id!'
				);
		  });
}
