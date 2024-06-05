document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('bookingForm');
    const confirmationMessage = document.getElementById('confirmationMessage');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        // Получаем выбранные значения
        const adventureType = document.getElementById('adventureType').value;

        // Выводим значения в консоль (можно заменить отправкой на сервер)
        console.log('Adventure Type:', adventureType);

        // Показываем сообщение о подтверждении бронирования
        confirmationMessage.classList.remove('hidden');
        confirmationMessage.textContent = 'Your booking is confirmed!';
    });
});
