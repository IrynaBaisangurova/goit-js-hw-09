
const form = document.querySelector('.feedback-form');

sendInfo();

form.addEventListener('input', dataEntryField);
form.addEventListener('submit', sendUserData);

function dataEntryField() {
    const formData = {
        email: (form.elements.email.value).trim(),
        message: (form.elements.message.value).trim(),
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function sendUserData(event) {
    event.preventDefault();

    const email = (form.elements.email.value).trim();
    const message = (form.elements.message.value).trim();


    if (!email || !message) {
        alert('Fill please all fields!');
        return;
    }

    const userData = {
        email: email,
        message: message 
    };
    console.log(userData);

    form.reset();
    localStorage.clear();
}

function sendInfo() {
    const areaInfo = JSON.parse(localStorage.getItem("feedback-form-state")) ?? {};
    form.elements.email.value = areaInfo.email || '';
    form.elements.message.value = areaInfo.message || '';
}
