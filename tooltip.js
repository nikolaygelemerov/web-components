class Tooltip extends HTMLElement {
  #tooltipContainer;

  constructor() {
    super();

    this.tooltipIcon = document.createElement('span');
    this.tooltipIcon.textContent = ' (?) ';
  }

  connectedCallback() {
    this.tooltipIcon.addEventListener('mouseenter', this.#showTooltip);
    this.tooltipIcon.addEventListener('mouseleave', this.#hideTooltip);
    this.appendChild(this.tooltipIcon);
  }

  #showTooltip = () => {
    this.#tooltipContainer = document.createElement('div');
    this.#tooltipContainer.textContent = 'This is the tooltip text!';

    this.appendChild(this.#tooltipContainer);
  };

  #hideTooltip = () => {
    this.removeChild(this.#tooltipContainer);
  };
}

customElements.define('uc-tooltip', Tooltip);
