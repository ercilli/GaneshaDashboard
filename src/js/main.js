import { renderSalesChart, renderMarginChart } from './charts.js';
import { setupProductModal } from './modal.js';
import { setupSidebarToggle } from './sidebar.js';
import { setupTabs } from './tabs.js';
import { setupSidebarNavigation } from './navigation.js';

async function loadComponent(selector, url) {
    console.log(`Intentando cargar componente desde: ${url}`);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            console.error(`Error al cargar ${url}:`, response.status, response.statusText);
            return;
        }
        const html = await response.text();
        document.querySelector(selector).innerHTML = html;
        console.log(`Componente cargado exitosamente en ${selector}`);
    } catch (error) {
        console.error(`Error en fetch de ${url}:`, error);
    }
}

// ...existing code...
document.addEventListener('DOMContentLoaded', async () => {
    await loadComponent('#sidebar-container', 'src/components/Sidebar.html');
    await loadComponent('#header-container', 'src/components/Header.html');
    await loadComponent('#tabs-container', 'src/components/Tabs.html');
    await loadComponent('#products', 'src/components/ProductsTab.html');
    await loadComponent('#categories', 'src/components/CategoriesTab.html');
    await loadComponent('#analysis', 'src/components/AnalysisTab.html');
    await loadComponent('#settings', 'src/components/SettingsTab.html');
    await loadComponent('#product-modal-container', 'src/components/ProductModal.html');
    setupSidebarToggle();
    setupProductModal();
    setupTabs();
    setupSidebarNavigation();
    renderSalesChart();
    renderMarginChart();
});