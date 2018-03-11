"use strict";
import { html, LitElement } from "@polymer/lit-element";

class HTToolbarLogo extends LitElement {
  render({href,imageSrc,imageWidth,imageHeight,showImage,company,app}) {
    return html`
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
      <a href="${href}">
        <img src="${imageSrc}" style="width: ${imageWidth}; height: ${imageHeight};" hidden?="${!showImage}">
        <div id="company">${company}</div>
        <div id="app">${app}</div>
      </a>
`;
  }

  static get is() {
    return "ht-toolbar-logo";
  }

  static get properties() {
    return {
      href: String,
      imageSrc: String,
      imageWidth: String,
      imageHeight: String,
      showImage: Boolean,
      company: String,
      app: String
    };
  }
  
  constructor() {
    super();
    this.href = ""
    this.imageSrc = ""
    this.imageWidth = ""
    this.imageHeight = ""
    this.showImage = ""
    this.company = ""
    this.app = ""
  }
}

customElements.define(HTToolbarLogo.is, HTToolbarLogo);
