function navigateSection(sectionId) {
    // Remove 'active' class from the current active section and tab
    document.querySelector('.form-section.active').classList.remove('active');
    document.querySelector('.step.active').classList.remove('active');

    // Add 'active' class to the target section and tab
    document.getElementById(sectionId).classList.add('active');
    document.querySelector('.step[data-section="' + sectionId + '"]').classList.add('active');

    // Programmatically switch to the target tab
    const targetTabIndex = Array.from(document.querySelectorAll('.nav-link')).findIndex(tab => tab.getAttribute('data-section') === sectionId);
    document.querySelectorAll('.nav-link').forEach((tab, index) => {
        tab.classList.toggle('active', index === targetTabIndex);
    });
}

// Define prices
const sizePrices = {
    small: 10,
    medium: 12,
    large: 14,
};

const crustPrices = {
    thin: 0,
    thick: 2,
};

const cheesePrices = {
    regular: 0,
    extra: 1,
    double: 2,
};

const toppingPrices = {
    pepperoni: 1,
    mushrooms: 2,
    onions: 1,
    // Add more toppings and prices as needed
};


function placeOrder() {
    // Gather selected options from each section
    const size = document.getElementById('pizzaSize').value;
    const crust = document.querySelector('input[name="crustOptions"]:checked').value;
    const cheese = document.getElementById('cheese').value;
    const toppings = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        toppings.push(checkbox.value);
    });

    // Calculate the total based on selected options and prices
    let total = sizePrices[size] + crustPrices[crust] + cheesePrices[cheese];
    toppings.forEach(topping => {
        total += toppingPrices[topping];
    });

    // Set the order details in the modal
    document.getElementById('modalSize').textContent = size;
    document.getElementById('modalCrust').textContent = crust;
    document.getElementById('modalCheese').textContent = cheese;
    document.getElementById('modalToppings').textContent = toppings.join(', ');
    document.getElementById('modalTotal').textContent = `$${total.toFixed(2)}`;

    // Show the modal
    const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
    orderModal.show();
}
