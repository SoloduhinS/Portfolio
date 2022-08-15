// Accordion
const accordeonHeaders = document.querySelectorAll('.info-content h2');

accordeonHeaders.forEach(function (item) {
    item.addEventListener('click', function() {
        this.parentElement.classList.toggle('hidden-section');
        for(let element of this.parentElement.children) {
            if(element.classList.contains('text-info')) {
                element.classList.toggle('hidden');
            }
        }
    });
});

// список всех li табов
const tabs = document.querySelectorAll('.tab-item');
// список всех таб контентов
const tabContents = document.querySelectorAll('.tab-content');
/** 
 * Связь между li и элементов контента строится через (li) data-name === (.tab-content) data-content
 * 
*/

// Спрятать все таб конетнты
function hideAllTabs() {
    tabContents.forEach((tabContent) => {
        tabContent.classList.remove('active-tab-content');
    })
}

// Деактивировать все табы (убрать у li класс active)
function deactivateAllTabs() {
    tabs.forEach((tab) => {
        tab.classList.remove('active');
    })
}

tabs.forEach((tabItem) => {
    // регистрируем обработчик клика на табу
    tabItem.addEventListener('click', function() {
        // получаем значение атрибута data-name для li элемента
        const tabName = this.dataset.name;
        console.log(this.dataset);
        // ищем элемент у которого атрибут data-content = tabName (атрибуту data-name у нажатого li)
        const sectionElement = document.querySelector(`[data-content="${tabName}"]`);

        // Если элемент не нашли = предупреждение + выход из функции
        if(!sectionElement) {
            // alert(`Добавь секцию с [data-content="${tabName}"]`);
            alert(`this section is under development="${tabName}"]`);
            return;
        }
        
        //скрыть все табы
        hideAllTabs();
        deactivateAllTabs();

        // показать элемент конетнта табы
        sectionElement.classList.add('active-tab-content');
        // добавить нижнюю границу нажатому li элементу
        this.classList.add('active')

    })
})
