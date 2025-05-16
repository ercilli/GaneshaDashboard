// CSS classes
const ACTIVE_CONTENT_CLASS = 'active';
const ACTIVE_BUTTON_CLASSES = ['border-indigo-500', 'text-indigo-600'];

export class TabManager {
    constructor({
        tabButtons,
        tabContents,
        activeButtonClasses = ACTIVE_BUTTON_CLASSES,
        activeContentClass = ACTIVE_CONTENT_CLASS
    }) {
        // Ahora recibimos directamente los elementos
        this.tabButtons = tabButtons;
        this.tabContents = tabContents;
        this.activeButtonClasses = activeButtonClasses;
        this.activeContentClass = activeContentClass;
    }

    init() {
        this.tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const tabId = button.getAttribute('data-tab');
                this.activate(tabId);
            });
        });
    }

    activate(tabId) {
        // Remover clases activas
        this.tabButtons.forEach(btn => btn.classList.remove(...this.activeButtonClasses));
        this.tabContents.forEach(content => content.classList.remove(this.activeContentClass));

        // Añadir clases activas al botón clickeado y su contenido
        const button = Array.from(this.tabButtons).find(btn => btn.getAttribute('data-tab') === tabId);
        if (button) button.classList.add(...this.activeButtonClasses);

        const content = Array.from(this.tabContents).find(c => c.id === tabId);
        if (content) content.classList.add(this.activeContentClass);
    }
}