document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('order-form');
    const orderTable = document.getElementById('order-table').getElementsByTagName('tbody')[0];
    const totalPriceElem = document.getElementById('total-price');
    const medicineSelect = document.getElementById('medicine');
    const quantityInput = document.getElementById('quantity');

    let favorites = JSON.parse(localStorage.getItem('favorites') || '{}');

    function calculateTotal() {
        let total = 0;
        Array.from(orderTable.rows).forEach(row => {
            const price = parseFloat(row.cells[2].textContent.substring(1));
            const quantity = parseInt(row.cells[1].textContent);
            total += price * quantity;
        });
        totalPriceElem.textContent = `$${total.toFixed(2)}`;
    }

    function addToOrder(item, quantity, price) {
        if (quantity > 0) {
            let row = orderTable.querySelector(`tr[data-item="${item}"]`);
            if (row) {
                const existingQuantity = parseInt(row.cells[1].textContent);
                row.cells[1].textContent = existingQuantity + quantity;
                row.cells[3].textContent = `$${(price * (existingQuantity + quantity)).toFixed(2)}`;
            } else {
                row = orderTable.insertRow();
                row.setAttribute('data-item', item);
                row.insertCell(0).textContent = item;
                row.insertCell(1).textContent = quantity;
                row.insertCell(2).textContent = `$${price.toFixed(2)}`;
                row.insertCell(3).textContent = `$${(price * quantity).toFixed(2)}`;
            }
            calculateTotal();
        }
    }

    function handleFormSubmit(event) {
        event.preventDefault();
        const item = medicineSelect.value;
        const quantity = parseInt(quantityInput.value);
        const price = parseFloat(medicineSelect.options[medicineSelect.selectedIndex].dataset.price);
        addToOrder(item, quantity, price);
    }

    function saveFavorites() {
        const item = medicineSelect.value;
        const quantity = parseInt(quantityInput.value);
        if (quantity > 0) {
            favorites[item] = (favorites[item] || 0) + quantity;
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }
    }

    function applyFavorites() {
        orderTable.innerHTML = '';
        for (const [item, quantity] of Object.entries(favorites)) {
            const price = parseFloat(medicineSelect.querySelector(`option[value="${item}"]`).dataset.price);
            addToOrder(item, quantity, price);
        }
    }

    form.addEventListener('submit', handleFormSubmit);
    document.getElementById('save-favorites').addEventListener('click', saveFavorites);
    document.getElementById('apply-favorites').addEventListener('click', applyFavorites);
});
