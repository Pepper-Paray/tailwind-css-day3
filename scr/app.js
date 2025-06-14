/**
 * Adds a cool animation to an element with the given ID.
 * The animation makes the element pulse with color and scale.
 */
function coolAnimation(elementId) {
    const el = document.getElementById(elementId);
    if (!el) return;

    el.style.transition = 'transform 0.3s cubic-bezier(.68,-0.55,.27,1.55), background 0.3s';
    el.style.background = '#38bdf8'; // Tailwind sky-400
    el.style.transform = 'scale(1.1)';

    setTimeout(() => {
        el.style.background = '#f472b6'; // Tailwind pink-400
        el.style.transform = 'scale(1)';
    }, 300);

    setTimeout(() => {
        el.style.background = '';
        el.style.transform = '';
    }, 600);
}

/**
 * Example usage: Attach to a button click
 */
function coolFunction() {
    coolAnimation('cool-element');
}

// Example: Attach to window for testing in HTML
window.coolFunction = coolFunction;