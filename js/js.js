const resultInput = document.getElementById('result');
const buttons = document.querySelectorAll('input[type="button"]');

// Добавляем обработчики событий для кнопок
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'c') {
            // Очистка результата
            resultInput.value = '';
        } else if (value === '=') {
            // Вычисление результата
            try {
                resultInput.value = eval(resultInput.value);
            } catch (e) {
                resultInput.value = 'Ошибка';
            }
        } else {
            // Добавление значения к результату
            resultInput.value += value;
        }
    });
});