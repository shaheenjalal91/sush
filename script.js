function updatePrices() {
    let prices = document.querySelectorAll(".price");

    prices.forEach(priceCell => {
        let initialPrice = parseInt(priceCell.getAttribute("data-initial"));
        let newPrice = initialPrice + (Math.floor(Math.random() * 21) - 10); // Random +/- 10
        priceCell.innerText = `₹${newPrice}`;
        
        // Change color based on increase or decrease
        if (newPrice > initialPrice) {
            priceCell.classList.add("up");
            priceCell.classList.remove("down");
        } else if (newPrice < initialPrice) {
            priceCell.classList.add("down");
            priceCell.classList.remove("up");
        } else {
            priceCell.classList.remove("up", "down");
        }
    });
}

// Update prices every 3 seconds
setInterval(updatePrices, 3000);