'use strict';

    fetch('/data/inventory.json')
    .then(response => response.json())
    .then(data => {
    const productGrid = document.getElementById('productGrid');
    data.forEach(item => {
    const productId = item.productId;
    const card = `
                    <div class="bg-white rounded-lg shadow-md overflow-hidden">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-32 sm:h-48 object-cover">
                        <div class="p-4">
                            <h3 class="text-lg font-semibold">${item.title}</h3>
                            <p class="text-gray-600">Quantity Available: ${item.quantity}</p>
                            <p class="text-gray-600">Price: $${item.price}</p>
                            <p class="text-gray-600">Categories: ${item.categories.join(', ')}</p>
                        <div class="p-4 flex justify-between items-center">
                            <div class="flex items-center">
                                <button onclick="updateQuantity('${productId}', -1, ${item.quantity})" class="bg-gray-300 text-gray-800 rounded-l p-2 hover:bg-gray-400">-</button>
                                <input type="text" id="quantity-${productId}" value="1" class="w-12 text-center border-t border-b" readonly>
                                <button onclick="updateQuantity('${productId}', 1, ${item.quantity})" class="bg-gray-300 text-gray-800 rounded-r p-2 hover:bg-gray-400">+</button>
                            </div>
                            <button onclick="buyProduct('${productId}', '${item.title}', ${item.quantity})" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Buy
                            </button>
                        </div>
                    </div>`;
    productGrid.innerHTML += card;
});
});

    document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('purchaseModal').classList.add('hidden');
});

    function buyProduct(productId, title, availableQuantity) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    const selectedQuantity = parseInt(quantityInput.value);

    if (selectedQuantity <= availableQuantity && selectedQuantity > 0) {
        showModal(`Purchased ${selectedQuantity} ${selectedQuantity > 1 ? (title.endsWith('s') ? title : title + 's') : title}`);


        console.log(`API Call to update inventory: Product ID - ${productId}, New Quantity - ${availableQuantity - selectedQuantity}`);
    // Simulate API call to update the backend inventory
} else {
    showModal('Invalid quantity selected.');
}
}
function updateQuantity(productId, change, maxQuantity) {
    const quantityInput = document.getElementById(`quantity-${productId}`);
    let quantity = parseInt(quantityInput.value);
    quantity += change;

    if (quantity > 0 && quantity <= maxQuantity) {
        quantityInput.value = quantity;
    }
}

    function showModal(content) {
    document.getElementById('modalContent').textContent = content;
    document.getElementById('purchaseModal').classList.remove('hidden');
}
