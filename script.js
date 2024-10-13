function copyToClipboard() {
    const textToCopy = document.querySelector('.language-bash').innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Команда скопирована!');
    });
}

function copyToClipboardPython() {
    const textToCopy = document.querySelectorAll('.language-python')[0].innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Python код скопирован!');
    });
}

function copyToClipboardJava() {
    const textToCopy = document.querySelectorAll('.language-java')[0].innerText;
    navigator.clipboard.writeText(textToCopy).then(() => {
        alert('Java код скопирован!');
    });
}

function sendTestRequest() {
    const model = document.getElementById('model-selector').value;
    const message = document.getElementById('message-input').value;

    if (!message) {
        alert('Пожалуйста, введите текст для проверки.');
        return;
    }

    const apiUrl = 'https://neurospacex-ruspamlib-serverandsite.hf.space/api/check_spam';
    const payload = {
        message: message,
        model_name: model
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        const pre = document.getElementById('api-response');
        pre.innerText = JSON.stringify(data, null, 2);
        Prism.highlightAll();  // подсветка ответа JSON
    })
    .catch(error => {
        alert('Произошла ошибка при отправке запроса.');
        console.error('Ошибка:', error);
    });
}
