class CopyIcon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.setupEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          :host {
            --size: 1rem;
            display: inline-block;
            width: var(--size, 100%);
            height: var(--size, 100%);
          }
          
          .copy-icon-container {
            cursor: pointer;
            user-select: none;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 0.375rem;
            transition: background-color 0.2s;
            width: 100%;
            height: 100%;
          }
  
          .copy-icon-container:hover {
            background-color: var(--accent-color, #f3f4f6);
          }
  
          svg {
            width: 100%;
            height: 100%;
          }
  
          .copy-icon, .check-icon {
            transition: opacity 0.3s ease;
          }
  
          .hidden {
            opacity: 0;
            display: none;
          }
        </style>
  
        <div class="copy-icon-container">
          <svg class="copy-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect
              class="rect"
              width="14"
              height="14"
              x="8"
              y="8"
              rx="2"
              ry="2"
            />
            <path
              class="path"
              d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            />
          </svg>
  
          <svg class="check-icon hidden"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>
      `;
  }

  setupEventListeners() {
    const container = this.shadowRoot.querySelector(".copy-icon-container");
    const copyIcon = this.shadowRoot.querySelector(".copy-icon");
    const checkIcon = this.shadowRoot.querySelector(".check-icon");

    container.addEventListener("click", async (e) => {
      // Toggle icons
      copyIcon.classList.add("hidden");
      checkIcon.classList.remove("hidden");

      // Reset back to copy icon after 2 seconds
      setTimeout(() => {
        copyIcon.classList.remove("hidden");
        checkIcon.classList.add("hidden");
      }, 2000);
    });
  }
}

customElements.define("copy-icon", CopyIcon);
