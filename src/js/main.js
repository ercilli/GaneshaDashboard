import { renderSalesChart, renderMarginChart } from './charts.js';
import { setupProductModal } from './modal.js';
import { setupSidebarToggle } from './sidebar.js';
import { setupTabs } from './tabs.js';
import { renderDynamicTabs } from './dynamic-tabs.js';

// Utilidad para capitalizar la primera letra
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

async function loadComponent(selector, url) {
    console.log(`Intentando cargar componente desde: ${url}`);
    const container = document.querySelector(selector);
    if (!container) {
        console.error(`No se encontró el contenedor: ${selector}`);
        return;
    }
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Error al cargar ${url}:`, response.status, response.statusText);
            return;
        }
        const html = await response.text();
        container.innerHTML = html;
        console.log(`Componente cargado exitosamente en ${selector}`);
    } catch (error) {
        console.error(`Error en fetch de ${url}:`, error);
    }
}

// Función para mostrar sección y tabs dinámicos
async function showSection(section) {
    // Carga el componente Tabs.html (si no está ya cargado)
    await loadComponent('#tabs-container', 'src/components/Tabs.html');
    // Genera los tabs dinámicos según la sección
    renderDynamicTabs(section);
    // Inicializa la lógica de tabs
    setupTabs(section);
    // Carga el contenido principal de la sección debajo de los tabs
}

document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('#sidebar-container', 'src/components/Sidebar.html');
    await loadComponent('#header-container', 'src/components/Header.html');
    await loadComponent('#tabs-container', 'src/components/Tabs.html');
    await loadComponent('#product-modal-container', 'src/components/ProductModal.html');

    setupSidebarToggle();
    setupProductModal();

    // Mostrar sección inicial (por ejemplo, productos)
    await showSection('products');

    // Navegación dinámica desde el sidebar
    document.body.addEventListener('click', async (e) => {
        const item = e.target.closest('.nav-item[data-section]');
        if (item) {
            e.preventDefault();
            const section = item.getAttribute('data-section');
            await showSection(section);
            // Cierra el sidebar en móvil
            const sidebar = document.querySelector('.sidebar');
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('active');
            }
        }
    });
});