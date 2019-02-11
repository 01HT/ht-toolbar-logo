"use strict";
import { LitElement, html, css } from "lit-element";

import { stylesBasicWebcomponents } from "@01ht/ht-theme/styles";

class HTToolbarLogo extends LitElement {
  static get styles() {
    return [
      stylesBasicWebcomponents,
      css`
        a {
          text-decoration: none;
          font-size: inherit;
          color: inherit;
          display: flex;
          align-items: center;
          position: relative;
        }

        img {
          display: block;
          margin-right: 8px;
        }

        #company {
          font-size: 12px;
          color: var(--secondary-text-color);
          font-weight: 400;
        }

        #app {
          font-size: 18px;
          font-weight: 400;
          //letter-spacing: -0.6px;
          color: #414549;
        }

        #beta {
          background: var(--secondary-text-color);
          color: #fff;
          font-size: 10px;
          border-radius: 4px;
          position: absolute;
          top: -4px;
          line-height: 1;
          right: -16px;
          font-weight: 400;
          padding: 2px 4px;
        }

        [hidden] {
          display: none;
        }

        @media (max-width: 400px) {
          #company {
            display: none;
          }
        }
      `
    ];
  }

  render() {
    const {
      href,
      imageSrc,
      imageWidth,
      imageHeight,
      showImage,
      app,
      company,
      beta
    } = this;
    return html`
      <a href="${href}">
        <img src="${imageSrc}" alt="${app}" style="width: ${imageWidth}; height: ${imageHeight};" ?hidden="${!showImage}">
        <div id="text-container">
          <span id="app">${app}</span>
          <span id="company" ?hidden="${
            company === "" ? true : false
          }">by ${company}</span>
          <div id="beta" ?hidden="${!beta}">beta</div>
        </div>
      </a>
`;
  }

  static get properties() {
    return {
      href: { type: String },
      imageSrc: { type: String },
      imageWidth: { type: String },
      imageHeight: { type: String },
      showImage: { type: Boolean },
      company: { type: String },
      app: { type: String },
      beta: { type: Boolean }
    };
  }

  constructor() {
    super();
    this.href = "";
    this.imageSrc = "";
    this.imageWidth = "";
    this.imageHeight = "";
    this.showImage = false;
    this.company = "";
    this.app = "";
  }
}

customElements.define("ht-toolbar-logo", HTToolbarLogo);
