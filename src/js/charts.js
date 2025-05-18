export function renderSalesChart() {
    const salesCanvas = document.getElementById('salesChart');
    if (!salesCanvas) return;
    const salesCtx = salesCanvas.getContext('2d');
    new Chart(salesCtx, {
        type: 'line',
        data: {
            labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
            datasets: [{
                label: 'Ventas',
                data: [1200, 1900, 1500, 2100, 2500, 1800, 2300],
                backgroundColor: 'rgba(79, 70, 229, 0.05)',
                borderColor: 'rgba(79, 70, 229, 1)',
                borderWidth: 2,
                tension: 0.1,
                fill: true
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { drawBorder: false }
                },
                x: { grid: { display: false } }
            }
        }
    });
}

export function renderMarginChart() {
    const marginCanvas = document.getElementById('marginChart');
    if (!marginCanvas) return;
    const marginCtx = marginCanvas.getContext('2d');
    new Chart(marginCtx, {
        type: 'bar',
        data: {
            labels: ['Electrónicos', 'Ropa', 'Hogar', 'Alimentos', 'Belleza'],
            datasets: [{
                label: 'Margen Promedio',
                data: [32, 28, 25, 15, 38],
                backgroundColor: [
                    'rgba(79, 70, 229, 0.7)',
                    'rgba(124, 58, 237, 0.7)',
                    'rgba(217, 119, 6, 0.7)',
                    'rgba(16, 185, 129, 0.7)',
                    'rgba(236, 72, 153, 0.7)'
                ],
                borderColor: [
                    'rgba(79, 70, 229, 1)',
                    'rgba(124, 58, 237, 1)',
                    'rgba(217, 119, 6, 1)',
                    'rgba(16, 185, 129, 1)',
                    'rgba(236, 72, 153, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    grid: { drawBorder: false },
                    ticks: {
                        callback: function(value) { return value + '%'; }
                    }
                },
                x: { grid: { display: false } }
            }
        }
    });
}

export function renderVentasMesChart() {
    const ctx = document.getElementById('ventasMesChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
            datasets: [{
                label: 'Ventas ($)',
                data: [35000, 42000, 51000, 69000, 85000],
                borderColor: '#6366f1',
                backgroundColor: 'rgba(99,102,241,0.1)',
                tension: 0.4,
                fill: true
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

export function renderStockCategoriaChart() {
    const ctx = document.getElementById('stockCategoriaChart');
    if (!ctx) return;
    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Macetas', 'Fertilizantes', 'Sustratos', 'Plantas'],
            datasets: [{
                data: [350, 200, 400, 300],
                backgroundColor: ['#6366f1', '#22c55e', '#facc15', '#f87171']
            }]
        },
        options: {
            plugins: { legend: { position: 'bottom' } }
        }
    });
}