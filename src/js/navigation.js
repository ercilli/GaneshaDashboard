export function setupSidebarNavigation() {
    document.querySelectorAll('.nav-item[data-tab]').forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const tabId = item.getAttribute('data-tab');
            // Cambia el tab activo
            document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
            const tab = document.getElementById(tabId);
            if (tab) tab.classList.add('active');
            // Cierra el sidebar en móvil
            const sidebar = document.querySelector('.sidebar');
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('active');
            }
        });
    });
}