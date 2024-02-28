const elements = document.querySelectorAll('[id^="c"]');
elements.forEach(element => {
    element.addEventListener('click', function() {
        elements.forEach(el => el.style.backgroundColor = 'white');
        if (element.id === 'c1') {
            c1.style.backgroundColor = 'red';
            c5.style.backgroundColor = 'red';
            c6.style.backgroundColor = 'red';
        } else if (element.id === 'c2') {
            c2.style.backgroundColor = 'white';
            c5.style.backgroundColor = 'yellow';
            c6.style.backgroundColor = 'yellow';
            c3.style.backgroundColor = 'yellow';
        } else if (element.id === 'c3' || element.id === 'c6') {
            c3.style.backgroundColor = 'green';
            c6.style.backgroundColor = 'green';
        } else if (element.id === 'c4') {
            setTimeout(function() {
                alert("Mind your own business");
            }, 100);
        }
    });
});
