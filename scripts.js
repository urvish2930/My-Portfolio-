window.addEventListener('DOMContentLoaded', (event) => {
    const greetingElement = document.getElementById('greeting');
    const currentTime = new Date().getHours();
    let greeting;
    if (currentTime >= 5 && currentTime < 12) {
        greeting = "Good Morning";
    } else if (currentTime >= 12 && currentTime < 17) {
        greeting = "Good Afternoon";
    } else if (currentTime >= 17 && currentTime < 21) {
        greeting = "Good Evening";
    } else {
        greeting = "Good Night";
    }
    greetingElement.textContent = `${greeting}, Welcome to My Portfolio`;
    greetingElement.classList.add('fade-in');
});
