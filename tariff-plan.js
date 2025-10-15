// Скрипт для отображения информации о тарифном плане

// Функция для получения информации о тарифном плане
function getTariffPlan() {
    // В реальном приложении здесь был бы API запрос
    // Для демонстрации используем статические данные
    return {
        name: 'Базовый',
        status: 'Активен',
        access: 'Полный доступ к курсу JavaScript 2024',
        features: [
            'Доступ ко всем спринтам курса',
            'Теоретические материалы',
            'Практические задания',
            'Примеры кода'
        ]
    };
}

// Обработчик клика по кнопке "Проверить тарифный план"
document.getElementById('check-plan').onclick = function() {
    const plan = getTariffPlan();
    const output = document.getElementById('plan-output');
    
    output.innerHTML = `
        <strong>Информация о вашем тарифном плане:</strong><br>
        Название: ${plan.name}<br>
        Статус: ${plan.status}<br>
        Доступ: ${plan.access}
    `;
};

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('Страница тарифного плана загружена');
    const plan = getTariffPlan();
    console.log('Текущий тарифный план:', plan);
});
