// An array of links for navigation bar
const navBarLinks = [
  { name: 'Home', url: '/' },
  { name: 'Street Wi-Fi', url: '/services' },
  { name: 'Hotels & Campuses', url: '/services' },
  { name: 'Contact', url: '/contact' },
];
// An array of links for footer
const footerLinks = [
  {
    section: 'Solutions',
    links: [
      { name: 'Street Wi-Fi', url: '/services' },
      { name: 'Hotel Wi-Fi', url: '/services' },
      { name: 'Campus Wi-Fi', url: '/services' },
    ],
  },
  {
    section: 'Company',
    links: [
      { name: 'About Skyart Networks', url: '#' },
      { name: 'Contact', url: '/contact' },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: '#',
  x: '#',
  github: '#',
  google: '#',
  slack: '#',
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
