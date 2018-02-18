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

        #company, #app {
          font-size: 22px;
        }

        #company {
          font-weight: 500;
        }

        #app {
          font-weight: 300;
        }

        #app {
          color: var(--accent-color);
          margin-left: 2px;
        }

        [hidden] {
            display:none;
        }
      </style>
      <a href="[[href]]">
        <img src="[[imageSrc]]" style="width: [[imageWidth]]; height: [[imageHeight]];" hidden$="[[!showImage]]">
        <div id="company">[[company]]</div>
        <div id="app">[[app]]</div>
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
      company: { type: String, value: "" },
      app: { type: String, value: "" }
    };
  }
}

customElements.define(HTToolbarLogo.is, HTToolbarLogo);
