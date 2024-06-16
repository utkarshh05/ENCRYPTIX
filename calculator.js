document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const buttons = Array.from(document.getElementsByClassName('btn'));

    buttons.map(button => {
        button.addEventListener('click', (e) => {
            switch(e.target.innerText) {
                case 'AC':
                    display.value = '';
                    break;
                case 'DEL':
                    display.value = display.value.slice(0, -1);
                    break;
                case '=':
                    try {
                        display.value = eval(display.value);
                    } catch {
                        display.value = 'Error';
                    }
                    break;
                case '%':
                    display.value = parseFloat(display.value) / 100;
                    break;
                default:
                    display.value += e.target.innerText;
            }
        });
    });
});
