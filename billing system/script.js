let items = [];

function addItem() {
    const name = document.getElementById('itemName').value.trim();
    const price = parseFloat(document.getElementById('itemPrice').value);
    const quantity = parseInt(document.getElementById('itemQuantity').value);

    // Validate input
    if (name === "" || isNaN(price) || price < 0 || isNaN(quantity) || quantity <= 0) {
        alert("Please enter valid item details.");
        return;
    }

    const total = price * quantity;
    items.push({ name, price, quantity, total });
    updateReceipt();
    clearInputs();
}

function updateReceipt() {
    const receiptBody = document.getElementById('receiptBody');
    receiptBody.innerHTML = '';

    let totalAmount = 0;

    items.forEach(item => {
        const row = `<tr>
                        <td>${item.name}</td>
                        <td>₹${item.price.toFixed(2)}</td>
                        <td>${item.quantity}</td>
                        <td>₹${item.total.toFixed(2)}</td>
                     </tr>`;
        receiptBody.innerHTML += row;
        totalAmount += item.total;
    });

    document.getElementById('totalAmount').innerText = `Total Amount: ₹${totalAmount.toFixed(2)}`;
}

function clearInputs() {
    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';
    document.getElementById('itemQuantity').value = '';
}

function printReceipt() {
    if (items.length === 0) {
        alert("No items to print.");
        return;
    }
    window.print();
}
function clearRecipt()
{
    
}