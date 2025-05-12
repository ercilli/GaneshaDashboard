export function setupProductModal() {
    const productModal = document.getElementById('productModal');
    const closeModal = document.getElementById('closeModal');
    const openModalBtn = document.querySelector('header button.bg-indigo-600');

    if (!productModal || !closeModal || !openModalBtn) return;

    openModalBtn.addEventListener('click', () => {
        productModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        productModal.classList.add('hidden');
    });
}