document.getElementById('hoee').addEventListener('click', function() {
    // Fade to the target background color
    document.body.style.backgroundColor = '#A3D5F5';  // Set the color you want

    // After the fade transition is complete (2 seconds in this case), change the page
    setTimeout(function() {
        console.log('changin')
        window.location.href = 'index.html';  // Redirect to the new page
    }, 4000);  // Time in milliseconds (2 seconds)
});