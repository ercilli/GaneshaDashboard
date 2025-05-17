export function setupTabs(section) {
    const tabButtons = document.querySelectorAll('.tab-btn');
    if (tabButtons.length === 0) return;

    // Selecciona el primer tab por defecto
    tabButtons[0].classList.add('border-indigo-500', 'text-indigo-600');
    loadTabContent(section, tabButtons[0].getAttribute('data-tab'));

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            tabButtons.forEach(b => b.classList.remove('border-indigo-500', 'text-indigo-600'));
            btn.classList.add('border-indigo-500', 'text-indigo-600');
            const tabId = btn.getAttribute('data-tab');
            loadTabContent(section, tabId);
        });
    });
}

async function loadTabContent(section, tabId) {
    const contentContainer = document.getElementById('section-content');
    if (!contentContainer) return;
    // Ajusta la ruta según tu estructura de carpetas
    const url = `src/components/${section}/${tabId}.html`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            contentContainer.innerHTML = `<div class="text-red-500">No se pudo cargar el contenido.</div>`;
            return;
        }
        const html = await response.text();
        contentContainer.innerHTML = html;
    } catch (error) {
        contentContainer.innerHTML = `<div class="text-red-500">Error al cargar el contenido.</div>`;
    }
}