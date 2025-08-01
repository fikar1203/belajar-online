welcomeMessage();

function validateForm(){
    const nameInput = document.getElementById('name-input')
    const emailInput = document.getElementById('email-input')
    const phoneInput = document.getElementById('phone-input')
    const messageInput = document.getElementById('message-input')

    if (nameInput.value === '' || emailInput.value === '' || phoneInput.value === '' || messageInput.value === '') {
        alert('Form cannot be empty')
    } else {
        document.getElementById('result-name').textContent = `Hi, ${nameInput.value}! Thank you for reaching out.`;
        document.getElementById('result-email').textContent = `Email : ${emailInput.value}`;
        document.getElementById('result-phone').textContent = `Phone : ${phoneInput.value}`;
        document.getElementById('result-message').textContent = `Your message: ${messageInput.value}`;
    }

}

function welcomeMessage () {
    const popup = prompt ('Please enter your name:');
    if (popup) {
        const welcomeElement = document.getElementById('welcome-speech');
        welcomeElement.textContent = popup;
    }
}