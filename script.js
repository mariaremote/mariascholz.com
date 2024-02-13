const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

function toggleNavbarDisplay() {
    navbar.style.display === 'block' ? (navbar.style.display = 'none') : (navbar.style.display = 'block');
}

hamburger.addEventListener('click', toggleNavbarDisplay);

// Verify that both of those are found by adding an `if` statement check that both of them are "truthy"
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// if (hamburger && navbar) {
//     hamburger.addEventListener('click', () =>
//         navbar.style.display === 'block' ? (navbar.style.display = 'none') : (navbar.style.display = 'block')
//     );
// } else {
//     // Dump an informative error to the console and handle things gracefully instead of crashing.
//     if (!hamburger) console.error('#hamburger element not found!');
//     if (!navbar) console.error('.navbar element not found!');
// }

// document.querySelector('#hamburger').addEventListener('click', function () {
//         const nav = document.querySelector('.navbar');
//         if (nav.style.display === 'block') {
//             nav.style.display = 'none';
//         } else {
//             nav.style.display = 'block';
//         }
//     });
