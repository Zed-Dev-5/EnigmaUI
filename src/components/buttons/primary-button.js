class PrimaryButton extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                .primary-btn {
                    background-color: #007bff;
                    color: white;
                    padding: 10px 20px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                .primary-btn:hover {
                    background-color: #0056b3;
                }
            </style>
            <button class="primary-btn"><slot></slot></button>
        `;
    }
}

customElements.define('primary-button', PrimaryButton);
