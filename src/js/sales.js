export function setupSales() {
    const form = document.getElementById('sale-form');
    const list = document.getElementById('sales-list');

    form?.addEventListener('submit', e => {
        e.preventDefault();

        const data = new FormData(form);
        const product = data.get('product');
        const quantity = parseInt(data.get('quantity'));
        const price = parseFloat(data.get('price'));
        const shipping = parseFloat(data.get('shipping'));

        const total = quantity * price + shipping;

        const item = document.createElement('li');
        item.className = 'bg-white p-4 rounded shadow';
        item.innerHTML = `
            <div class="flex justify-between items-center">
                <div>
                    <p class="font-semibold">${product} × ${quantity}</p>
                    <p class="text-sm text-gray-500">Envío: $${shipping.toFixed(2)}</p>
                </div>
                <span class="font-bold text-indigo-600">$${total.toFixed(2)}</span>
            </div>
        `;

        list?.prepend(item);
        form.reset();
    });
}