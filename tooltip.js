class Tooltip extends HTMLElement {
  #tooltipContainer;
  #tooltipIcon;
  #tooltipText;

  constructor() {
    super();

    this.attachShadow({ mode: 'open' });

    const template = document.querySelector('#tooltip-template');
    this.shadowRoot.innerHTML = '<slot></slot><span>(?)</span>';
  }

  connectedCallback() {
    this.#tooltipText = this.getAttribute('text');

    this.#tooltipIcon = this.shadowRoot.querySelector('span');

    this.#tooltipIcon.addEventListener('mouseenter', this.#showTooltip);
    this.#tooltipIcon.addEventListener('mouseleave', this.#hideTooltip);

    this.shadowRoot.appendChild(this.#tooltipIcon);
  }

  #showTooltip = () => {
    this.#tooltipContainer = document.createElement('div');
    this.#tooltipContainer.textContent = this.#tooltipText;

    this.shadowRoot.appendChild(this.#tooltipContainer);
  };

  #hideTooltip = () => {
    this.shadowRoot.removeChild(this.#tooltipContainer);
  };
}

customElements.define('uc-tooltip', Tooltip);
