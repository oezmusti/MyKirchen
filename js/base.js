// Header laden
fetch('../layout/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    });

// Footer laden
fetch('../layout/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });

// Header 
function onMenuToggle(e) {
    const navlinks = document.querySelector(".navLinks");
    e.name = e.name === "menu" ? "close" : "menu";
    navlinks.classList.toggle("left-[0%]");
}

let counter = 0;

function openNav() {
    console.log(counter);

    let sidenav = document.getElementById('side-nav');

    if (counter % 2 === 1) {
        sidenav.classList.remove('side-on');
        sidenav.classList.add('side-off');
    }
    else {
        sidenav.classList.remove('side-off');
        sidenav.classList.add('side-on');
    }

    counter++;
}