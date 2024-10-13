function copyToClipboard() {
    const commandText = document.querySelector('.install-command').textContent;
    navigator.clipboard.writeText(commandText).then(() => {
        alert('Команда скопирована в буфер обмена!');
    }, () => {
        alert('Ошибка при копировании команды.');
    });
}

document.querySelectorAll('.button-link').forEach(button => {
    button.addEventListener('mouseenter', () => {
        button.style.transform = 'scale(1.1)';
        button.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.5)';
    });
    button.addEventListener('mouseleave', () => {
        button.style.transform = 'scale(1)';
        button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    });
});
