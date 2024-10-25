let bagItems = [];
function addToBag(itemId) {
    bagItems.push(itemId);
    displayBagIcon();
}
function displayBagIcon() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {

        bagItemCountElement.style.visibility = 'visible';
        bagItemCountElement.innerText = bagItems.length;
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}
function displayItemOnHomePage() {
    let itemContainerElement = document.querySelector('.items-container');
    let innerHTML = ''
    items.forEach(function (item) {

        innerHTML += `<div class="item-container">
    <img class="item-image" src="${item.image}" alt="item image">
        <div class="rating">
        ${item.rating.stars}⭐|${item.rating.count}
        </div>
        <div class="company-name">${item.company}</div>
        <div class="item-name">${item.item_name}</div>
        <div class="price">
            <span class="current-prince">Rs ${item.current_price}</span>
            <span class="original-prince">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bag" onClick="addToBag (${item.id})">Add to Bag</button>
</div>
`
    });

    itemContainerElement.innerHTML = innerHTML;
}
displayItemOnHomePage();