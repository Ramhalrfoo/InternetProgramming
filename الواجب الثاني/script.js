document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('controlButton');
    const rectangle = document.getElementById('movingRectangle');
    const colors = ['red', 'green', 'blue', 'yellow'];
    let currentPosition = 0;
    
    button.addEventListener('click', function() {
        // Update position counter (0-3 for the 4 corners)
        currentPosition = (currentPosition + 1) % 4;
        
        // Move rectangle to the next corner
        switch(currentPosition) {
            case 0: // Bottom left (original position)
                rectangle.style.left = '20px';
                rectangle.style.bottom = '20px';
                rectangle.style.top = 'auto';
                rectangle.style.right = 'auto';
                break;
            case 1: // Top left
                rectangle.style.left = '20px';
                rectangle.style.top = '20px';
                rectangle.style.bottom = 'auto';
                rectangle.style.right = 'auto';
                break;
            case 2: // Top right
                rectangle.style.right = '20px';
                rectangle.style.top = '20px';
                rectangle.style.left = 'auto';
                rectangle.style.bottom = 'auto';
                break;
            case 3: // Bottom right
                rectangle.style.right = '20px';
                rectangle.style.bottom = '20px';
                rectangle.style.left = 'auto';
                rectangle.style.top = 'auto';
                break;
        }
        
        // Change rectangle color
        rectangle.style.backgroundColor = colors[currentPosition];
    });
});