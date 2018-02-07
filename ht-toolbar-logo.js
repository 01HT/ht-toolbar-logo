"use strict";
import { Element } from "../@polymer/polymer/polymer-element.js";

class HTToolbarLogo extends Element {
  static get template() {
    return `
      <style>
        :host {
            display: block;
            position: relative;
            box-sizing: border-box;
        }

        a {
            text-decoration: none;
            font-size: inherit;
            color: inherit;
            display: flex;
            align-items: center;
        }

        img {
            display: block;
            margin-right: 8px;
        }

        #main, #sub {
            letter-spacing: 2px;
            font-weight: 500;
        }

        [hidden] {
            display:none;
        }
      </style>
      <a href="[[href]]">
        <img src="[[imageSrc]]" style="width: [[imageWidth]]; height: [[imageHeight]];" hidden$="[[!showImage]]">
        <div id="main">[[main]]</div>
        <div id="sub">[[sub]]</div>
      </a>
`;
  }
  static get is() {
    return "ht-toolbar-logo";
  }

  static get properties() {
    return {
      href: { type: String, value: "" },
      imageSrc: { type: String, value: "" },
      imageWidth: { type: String, value: "" },
      imageHeight: { type: String, value: "" },
      showImage: { type: Boolean, value: true, reflectToAttribute: true },
      main: { type: String, value: "" },
      sub: { type: String, value: "" }
    };
  }
}

customElements.define(HTToolbarLogo.is, HTToolbarLogo);
