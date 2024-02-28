const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');

c1.addEventListener('click', function() {
    c1.style.backgroundColor = 'red';
    c5.style.backgroundColor = 'red';
    c6.style.backgroundColor = 'red';
    c2.style.backgroundColor = 'white';
    c3.style.backgroundColor = 'white';
    c4.style.backgroundColor = 'white';
});

c2.addEventListener('click', function() {
    c2.style.backgroundColor = 'white';
    c5.style.backgroundColor = 'yellow';
    c6.style.backgroundColor = 'yellow';
    c3.style.backgroundColor = 'yellow';
    c4.style.backgroundColor = 'white';
    c1.style.backgroundColor = 'white';
});

c5.addEventListener('click', function() {
    c2.style.backgroundColor = 'white';
    c5.style.backgroundColor = 'white';
    c6.style.backgroundColor = 'white';
    c3.style.backgroundColor = 'white';
    c4.style.backgroundColor = 'white';
    c1.style.backgroundColor = 'white';
})

c3.addEventListener('click', function() {
    c2.style.backgroundColor = 'white';
    c5.style.backgroundColor = 'white';
    c6.style.backgroundColor = 'green';
    c3.style.backgroundColor = 'green';
    c4.style.backgroundColor = 'white';
    c1.style.backgroundColor = 'white';
})

c6.addEventListener('click', function() {
    c2.style.backgroundColor = 'white';
    c5.style.backgroundColor = 'white';
    c6.style.backgroundColor = 'green';
    c3.style.backgroundColor = 'green';
    c4.style.backgroundColor = 'white';
    c1.style.backgroundColor = 'white';
})

c4.addEventListener('click', function() {
    c2.style.backgroundColor = 'white';
    c5.style.backgroundColor = 'white';
    c6.style.backgroundColor = 'white';
    c3.style.backgroundColor = 'white';
    c4.style.backgroundColor = 'white';
    c1.style.backgroundColor = 'white';
    setTimeout(function() {
        alert("Mind your own business");
    }, 100);
});