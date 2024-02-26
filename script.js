const hamburger = document.querySelector('#hamburger');
const nav = document.querySelector('.navbar');

// Verify that both of those are found by adding an `if` statement check that both of them are "truthy"
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy
if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
        if (nav.style.display === 'block') {
            nav.style.display = 'none';
        } else {
            nav.style.display = 'block';
        }
    });
} else {
    // Dump an informative error to the console and handle things gracefully instead of crashing.
    if (!hamburger) console.error('#hamburger element not found!');
    if (!nav) console.error('.navbar element not found!');
}

// document.querySelector('#hamburger').addEventListener('click', function () {
//         const nav = document.querySelector('.navbar');
//         if (nav.style.display === 'block') {
//             nav.style.display = 'none';
//         } else {
//             nav.style.display = 'block';
//         }
//     });

// TECHSTACK SPAN

const techStack = ['Python', 'Flask', 'Javascript', 'HTML', 'CSS'];
const techStackSpan = document.getElementById('typewriter');
const pauseBetweenWords = 1500;
const typingInterval = 150;
let indexTechStack = 0;
let indexWord = 0;

function typeTechStack() {
    if (indexWord < techStack[indexTechStack].length) {
        // Add next character
        techStackSpan.textContent += techStack[indexTechStack].charAt(indexWord);
        indexWord++;
        setTimeout(typeTechStack, typingInterval);
    } else {
        // Pause after typing a word
        setTimeout(() => {
            techStackSpan.textContent = ''; // Clear the span
            indexWord = 0; // Reset character index
            indexTechStack = (indexTechStack + 1) % techStack.length; // when last index modulo array length is zero = reset index
            typeTechStack(); // Start typing the next word
        }, pauseBetweenWords);
    }
}
document.addEventListener('DOMContentLoaded', typeTechStack);