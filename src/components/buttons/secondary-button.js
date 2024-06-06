class SecondaryButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .secondary-btn {
                    background-color: #6c757d;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .secondary-btn:hover {
                    background-color: #5a6268;
                }
            </style>
            <button class="secondary-btn"><slot></slot></button>
        `;
    }
}

customElements.define('secondary-button', SecondaryButton);
