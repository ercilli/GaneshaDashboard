export const TABS_CONFIG = {
    products: [
        { id: 'list', label: '📋 Listado' },
        { id: 'price-recommendations', label: '🧠 Recomendaciones de Precio' },
        { id: 'low-margin', label: '📈 Margen bajo / Ajustar' }
    ],
    sales: [
        { id: 'register', label: '🧾 Registrar Venta' },
        { id: 'intelligent-simulation', label: '🧠 Simular Venta Inteligente' },
        { id: 'history', label: '📜 Historial' }
    ],
    promotions: [
        { id: 'list', label: '🎁 Listado de Promos' },
        { id: 'profitability-simulation', label: '🧠 Simulación de Rentabilidad' },
        { id: 'expiring-soon', label: '⏳ Promos por vencer' }
    ],
    categories: [
        { id: 'list', label: '📂 Lista de Categorías' },
        { id: 'average-margin', label: '📊 Margen promedio' }
    ],
    shipping: [
        { id: 'policy', label: '📦 Política de envío' },
        { id: 'cost-per-sale', label: '🚚 Gasto por venta' },
        { id: 'absorption-stats', label: '📊 Estadísticas de absorción' }
    ],
    stock: [
        { id: 'entries-exits', label: '📥 Ingresos / Egresos' },
        { id: 'losses-expirations', label: '📉 Pérdidas / Vencimientos' },
        { id: 'low-stock-alerts', label: '🔔 Alertas de stock bajo' }
    ],
    analysis: [
        { id: 'sales-by-month', label: '📊 Ventas por mes' },
        { id: 'outdated-products', label: '🏷️ Productos desfasados' },
        { id: 'negative-margin', label: '⚠️ Margen negativo' }
    ],
    settings: [
        { id: 'currency-inflation', label: '💲 Moneda, inflación' },
        { id: 'min-margin', label: '📉 Margen mínimo' },
        { id: 'shipping-cost-policy', label: '🚚 Costo de envío, políticas' },
        { id: 'alerts', label: '🔔 Activación de alertas' }
    ],
    users: [
        { id: 'list', label: '👤 Listado de usuarios' }
        // Puedes agregar más tabs de usuario si lo necesitas
    ],
    dashboard: [
        { id: 'resume', label: '📉 Resumen' }
        // Puedes agregar más tabs de usuario si lo necesitas
    ]
};

export function renderDynamicTabs(section) {
    const tabs = TABS_CONFIG[section] || [];
    const container = document.getElementById('dynamic-tabs');
    if (!container) return;

    container.innerHTML = tabs.map((tab, idx) => `
        <button
            class="tab-btn py-2 px-3 md:px-4 font-medium text-xs md:text-base text-gray-500 hover:text-indigo-600 border-b-2 border-transparent hover:border-indigo-500${idx === 0 ? ' border-indigo-500 text-indigo-600' : ''}"
            data-tab="${tab.id}">${tab.label}</button>
    `).join('');
}