document.addEventListener("DOMContentLoaded", function() {
    const c = document.getElementById("matrixRain");
    const ctx = c.getContext("2d");

    // Making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    // Characters
    let matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%";
    matrix = matrix.split("");

    let font_size = 10;
    let columns = c.width / font_size; // Number of columns for the rain
    let drops = [];

    // X below is the x coordinate
    for(let x = 0; x < columns; x++)
        drops[x] = 1; 

    // Drawing the characters
    function draw() {
        // Translucent BG to show trail
        ctx.fillStyle = "rgba(0, 0, 0, 0.05)"; // Slightly more transparent
        ctx.fillRect(0, 0, c.width, c.height);

        ctx.fillStyle = "#0F0"; // Green text
        ctx.font = font_size + "px arial";
        // Looping over drops
        for(let i = 0; i < drops.length; i++) {
            let text = matrix[Math.floor(Math.random()*matrix.length)];
            ctx.fillText(text, i*font_size, drops[i]*font_size);

            if(drops[i]*font_size > c.height && Math.random() > 0.975)
                drops[i] = 0;

            drops[i]++;
        }
    }

    setInterval(draw, 35);

    // Reduce opacity over time or on scroll
    function reduceOpacity() {
        c.style.opacity = Math.max(0.1, parseFloat(c.style.opacity) - 0.01);
    }

    window.addEventListener('scroll', reduceOpacity);
});
