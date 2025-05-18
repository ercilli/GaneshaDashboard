let carrito = [];

function actualizarCarrito() {
    const tbody = document.getElementById('carritoBody');
    tbody.innerHTML = '';
    let total = 0;
    carrito.forEach((item, idx) => {
        const subtotal = item.precio * item.cantidad * (1 - item.descuento / 100);
        total += subtotal;
        tbody.innerHTML += `
            <tr>
                <td class="px-2 py-2 text-sm">${item.producto}</td>
                <td class="px-2 py-2 text-sm">${item.cantidad}</td>
                <td class="px-2 py-2 text-sm">$${item.precio.toFixed(2)}</td>
                <td class="px-2 py-2 text-sm">${item.descuento}%</td>
                <td class="px-2 py-2 text-sm">$${subtotal.toFixed(2)}</td>
                <td class="px-2 py-2 text-sm">
                    <button type="button" onclick="quitarDelCarrito(${idx})" class="text-red-600 hover:text-red-900"><i class="fas fa-trash"></i></button>
                </td>
            </tr>
        `;
    });
    document.getElementById('carritoTotal').textContent = total.toFixed(2);
    document.getElementById('carritoContainer').classList.toggle('hidden', carrito.length === 0);
}

window.quitarDelCarrito = function(idx) {
    carrito.splice(idx, 1);
    actualizarCarrito();
};

document.getElementById('addProductForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(this));
    carrito.push({
        producto: data.producto,
        cantidad: parseInt(data.cantidad) || 1,
        precio: parseFloat(data.precio) || 0,
        descuento: parseFloat(data.descuento) || 0
    });
    this.reset();
    actualizarCarrito();
});

document.getElementById('finalSaleForm').addEventListener('submit', function(e) {
    e.preventDefault();
    if (carrito.length === 0) {
        alert('Agrega al menos un producto a la venta.');
        return;
    }
    // Aquí podrías enviar los datos a tu backend o almacenarlos localmente
    carrito = [];
    actualizarCarrito();
    document.getElementById('salesRegisterSuccess').classList.remove('hidden');
    this.reset();
    setTimeout(() => {
        document.getElementById('salesRegisterSuccess').classList.add('hidden');
    }, 2500);
});