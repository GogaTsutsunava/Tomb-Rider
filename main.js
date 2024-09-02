// Select all menu items
const menuItems = document.querySelectorAll('.menu-item');

// Function to remove 'active' class from all items and add to the clicked item
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Remove 'active' from all items
        menuItems.forEach(i => i.classList.remove('active'));
        // Add 'active' to the clicked item
        item.classList.add('active');
    });
});
