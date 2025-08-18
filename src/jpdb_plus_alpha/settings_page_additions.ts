// @reader content-script

const settings_header: HTMLElement = document.querySelector('div.container.bugfix > h4') ?? new HTMLElement();

const new_settings_nav_header = document.createElement('h4');
new_settings_nav_header.style.display = 'flex';
new_settings_nav_header.style.flexDirection = 'row';
new_settings_nav_header.style.justifyContent = 'center';
new_settings_nav_header.style.gap = '16px';
new_settings_nav_header.style.fontSize = '24px';

const settings_link = document.createElement('a');
settings_link.innerText = 'Settings';
settings_link.style.color = '#bbb';
settings_link.setAttribute('href', 'https://jpdb.io/settings');

const nav_header_spacer = document.createElement('div');
nav_header_spacer.innerText = '|';

const experimental_settings_link = document.createElement('a');
experimental_settings_link.innerText = 'Experimental Settings';
experimental_settings_link.style.color = '#bbb';
experimental_settings_link.setAttribute('href', 'https://jpdb.io/labs/settings');

new_settings_nav_header.append(settings_link, nav_header_spacer, experimental_settings_link);

settings_header.replaceWith(new_settings_nav_header);

if (settings_header?.innerText == 'Settings') {
  experimental_settings_link.style.opacity = '0.6';
  settings_link.style.pointerEvents = 'none';
} else if (settings_header?.innerHTML == 'Experimental settings') {
  settings_link.style.opacity = '0.6';
  experimental_settings_link.style.pointerEvents = 'none';
}
