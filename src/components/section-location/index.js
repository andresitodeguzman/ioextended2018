import { ElementLiteLit, html, prepareShadyCSS } from '@littleq/element-lite/element-lite-lit.js';
import { template } from './template.js';
import style from './style.styl';
import '../lazy-picture/index.js';
const { HTMLElement, customElements } = window;

class Component extends ElementLiteLit(HTMLElement, style.toString()) {
  static get is () { return 'section-location'; }

  constructor () {
    super();
    this.__data = {};
  }

  set date (date) {
    this.__data['date'] = date;
    this.invalidate();
  }

  get date () {
    return this.__data['date'];
  }

  set dateLink (dateLink) {
    this.__data['dateLink'] = dateLink;
    this.invalidate();
  }

  get dateLink () {
    return this.__data['dateLink'];
  }

  set location (location) {
    this.__data['location'] = location;
    this.invalidate();
  }

  get location () {
    return this.__data['location'];
  }

  set locationLink (locationLink) {
    this.__data['locationLink'] = locationLink;
    this.invalidate();
  }

  get locationLink () {
    return this.__data['locationLink'];
  }

  set registerLink (registerLink) {
    this.__data['registerLink'] = registerLink;
    this.invalidate();
  }

  get registerLink () {
    return this.__data['registerLink'];
  }

  set registerDisable (registerDisable) {
    this.__data['registerDisable'] = registerDisable;
    this.invalidate();
  }

  get registerDisable () {
    return this.__data['registerDisable'];
  }

  set locationId (id) {
    this.__data['locationId'] = id;
    this.invalidate();
  }

  get locationId () {
    return this.__data['locationId'];
  }

  render () {
    return html`<style>${style.toString()}</style>${template(this)}`;
  }

  trackOutbound ({ target: el }) {
    const { href } = el;
    if (window.gtag) {
      window.gtag('event', 'click', {
        'event_category': 'outbound',
        'event_label': `${this.locationId}: ${href}`,
        'transport_type': 'beacon'
      });
    }
  }
}

if (window.ShadyCSS) prepareShadyCSS(style.toString(), Component.is);

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
