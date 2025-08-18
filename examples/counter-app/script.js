document.addEventListener('DOMContentLoaded', function() {
    let counter = 0;
    
    const counterDisplay = document.getElementById('counterValue');
    const increaseBtn = document.getElementById('increaseBtn');
    const decreaseBtn = document.getElementById('decreaseBtn');
    const resetBtn = document.getElementById('resetBtn');
    
    function updateDisplay() {
        counterDisplay.textContent = counter;
        
        counterDisplay.classList.add('animate');
        setTimeout(() => {
            counterDisplay.classList.remove('animate');
        }, 200);
        
        if (counter > 0) {
            counterDisplay.style.color = '#4CAF50';
        } else if (counter < 0) {
            counterDisplay.style.color = '#f44336';
        } else {
            counterDisplay.style.color = '#667eea';
        }
    }
    
    increaseBtn.addEventListener('click', function() {
        counter++;
        updateDisplay();
    });
    
    decreaseBtn.addEventListener('click', function() {
        counter--;
        updateDisplay();
    });
    
    resetBtn.addEventListener('click', function() {
        counter = 0;
        updateDisplay();
    });
});