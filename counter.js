// Add event listeners
document.getElementById('plusBtn').addEventListener('click', increaseCount);

document.getElementById('minusBtn').addEventListener('click', decreaseCount);

document.getElementById('resetBtn').addEventListener('click', resetCount);

document.getElementById('saveBtn').addEventListener('click', saveCount);

document.getElementById('loadBtn').addEventListener('click', loadCount);


// Declare count
let count = 0;

// Load counter when the page opens
loadCount();

// Function to display the counter 
function updateCount() {
    document.getElementById('count').innerHTML = count;
}

// Function to increase the count
function increaseCount() {
    count++;
    updateCount();
}

// Function to decrease the count
function decreaseCount() {
    if(count > 0) {
        count--;
        updateCount();
    }
}

// Function to reset count
function resetCount() {
    count = 0;
    updateCount();
}

// Function to save count
function saveCount() {
    localStorage.setItem('count', count);
}

// Function to load the count
function loadCount() {
    let saved = localStorage.getItem('count');

    if(saved !== null) {
        count = Number(saved);
    }
    updateCount();
}