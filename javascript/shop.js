// Object to store the state of each filter
let filterState = {
    sprits: false,
    tilemaps: false,
    objects: false,
    prints: false,
    stickers: false,
    wallpaper: false
};

document.querySelectorAll('.filterButton').forEach(button => {
    button.addEventListener('click', function() {
        
        this.classList.toggle('active');
        
        const filter = this.getAttribute('data-filter');
        filterState[filter] = !filterState[filter];

        console.log(filterState);

        updateDisplayedItems(filterState);
    });
});

function updateDisplayedItems(filterState) {
    // Get all items
    const items = document.querySelectorAll('.item');
    
    // Determine if any filter is active
    const anyFilterActive = Object.values(filterState).some(state => state);

    items.forEach(item => {
        // Get the category of the item
        const itemCategory = item.getAttribute('data-category');

        // Determine if the item should be displayed
        const shouldDisplay = !anyFilterActive || filterState[itemCategory];

        // Show or hide the item based on the filter state
        item.style.display = shouldDisplay ? 'block' : 'none';
    });
}
