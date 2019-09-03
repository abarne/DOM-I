const siteContent = {
	nav: {
		'nav-item-1': 'Services',
		'nav-item-2': 'Product',
		'nav-item-3': 'Vision',
		'nav-item-4': 'Features',
		'nav-item-5': 'About',
		'nav-item-6': 'Contact',
		'img-src': 'img/logo.png'
	},
	cta: {
		h1: 'DOM Is Awesome',
		button: 'Get Started',
		'img-src': 'img/header-img.png'
	},
	'main-content': {
		'features-h4': 'Features',
		'features-content':
			'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'about-h4': 'About',
		'about-content':
			'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'middle-img-src': 'img/mid-page-accent.jpg',
		'services-h4': 'Services',
		'services-content':
			'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'product-h4': 'Product',
		'product-content':
			'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
		'vision-h4': 'Vision',
		'vision-content':
			'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
	},
	contact: {
		'contact-h4': 'Contact',
		address: '123 Way 456 Street Somewhere, USA',
		phone: '1 (888) 888-8888',
		email: 'sales@greatidea.io'
	},
	footer: {
		copyright: 'Copyright Great Idea! 2018'
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

// ***********nav bar****************
let nav1 = document.getElementsByTagName('a');

nav1[0].innerHTML = siteContent['nav']['nav-item-1'];
nav1[1].innerHTML = siteContent['nav']['nav-item-2'];
nav1[2].innerHTML = siteContent['nav']['nav-item-3'];
nav1[3].innerHTML = siteContent['nav']['nav-item-4'];
nav1[4].innerHTML = siteContent['nav']['nav-item-5'];
nav1[5].innerHTML = siteContent['nav']['nav-item-6'];

// *************main section***********

let mainDomAwesome = document.querySelector('.cta-text');
mainDomAwesome.getElementsByTagName('h1')[0].innerHTML = 'Dom<br> Is<br> Awesome';
mainDomAwesome.getElementsByTagName('button')[0].innerHTML = 'Get Started';

let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

let textContent = document.getElementsByClassName('text-content');

textContent[0].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['features-h4'];

textContent[0].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['features-content'];

textContent[1].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['about-h4'];

textContent[1].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['about-content'];

let aboutImg = document.getElementById('middle-img');
aboutImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

textContent[2].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['services-h4'];

textContent[2].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['services-content'];

textContent[3].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['product-h4'];

textContent[3].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['product-content'];

textContent[4].getElementsByTagName('h4')[0].innerHTML = siteContent['main-content']['vision-h4'];

textContent[4].getElementsByTagName('p')[0].innerHTML = siteContent['main-content']['vision-content'];

let Contact = document.querySelector('.contact');
Contact.getElementsByTagName('h4')[0].innerHTML = siteContent['contact']['contact-h4'];
Contact.getElementsByTagName('p')[0].innerHTML = siteContent['contact']['address'];
Contact.getElementsByTagName('p')[1].innerHTML = siteContent['contact']['phone'];
Contact.getElementsByTagName('p')[2].innerHTML = siteContent['contact']['email'];

let Footer = document.getElementsByTagName('footer')[0];
Footer.getElementsByTagName('p')[0].innerHTML = siteContent['footer']['copyright'];

nav1[0].style.color = 'green';
nav1[1].style.color = 'green';
nav1[2].style.color = 'green';
nav1[3].style.color = 'green';
nav1[4].style.color = 'green';
nav1[5].style.color = 'green';

// nav1.forEach((element) => {
// 	element.style.color = 'green';
// });

let newA1 = document.createElement('a');
newA1.textContent = 'Team';
newA1.style.color = 'green';

let newElement = document.querySelector('nav');

newElement.append(newA1);

let newA2 = document.createElement('a');
newA2.textContent = 'New Page';
newA2.style.color = 'green';

newElement.append(newA2);
