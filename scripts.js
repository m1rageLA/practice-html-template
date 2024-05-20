document.querySelector('a[href="#targetSection"]').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('targetSection').scrollIntoView({
        behavior: 'smooth' 
    });
});