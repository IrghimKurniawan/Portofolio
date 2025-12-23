const form =document.getElementById('contactForm');
form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch("https://formspree.io/f/xnjalyqw", {
        method: "POST",
        body: formData,
        headers: {
            Accept: "application/json"
        }
    })
    if (response.ok) {
        alert("Thank you for your message!");
        form.reset();
    } else {
        alert("There was a problem submitting your form.");
    }
});