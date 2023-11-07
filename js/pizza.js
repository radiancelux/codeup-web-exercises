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
function placeOrder() {
    // Gather selected options from each section
    const size = document.getElementById('pizzaSize').value;
    const crust = document.querySelector('input[name="crustOptions"]:checked').value;
    const cheese = document.getElementById('cheese').value;
    const sauce = document.getElementById('sauce').value;
    const toppings = [];
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(checkbox => {
        toppings.push(checkbox.value);
    });

    // Set the order details in the modal
    document.getElementById('modalSize').textContent = size;
    document.getElementById('modalCrust').textContent = crust;
    document.getElementById('modalCheese').textContent = cheese;
    document.getElementById('modalSauce').textContent = sauce;
    document.getElementById('modalToppings').textContent = toppings.join(', ');

    // Show the modal
    const orderModal = new bootstrap.Modal(document.getElementById('orderModal'));
    orderModal.show();
};
