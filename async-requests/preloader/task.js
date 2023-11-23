const loaderImage = document.getElementById('loader');
const items = document.getElementById('items');

let xhr = new XMLHttpRequest();

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();

xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        loaderImage.classList.remove('loader_active');

        const response = JSON.parse(xhr.responseText);
        const valutes = Object.entries(response.response.Valute);

        console.log(valutes);

        for (let i = 0; i < valutes.length; i++) {
            let divItem = document.createElement('div');
            divItem.className = 'item';
            items.append(divItem);

            let valuteCode = document.createElement('div');
            valuteCode.textContent = valutes[i][1].CharCode;
            valuteCode.className = 'item__code';
            divItem.append(valuteCode);

            let valuteValue = document.createElement('div');
            valuteValue.textContent = valutes[i][1].Value;
            valuteValue.className = 'item__value';
            divItem.append(valuteValue);

            let valuteCurrency = document.createElement('div');
            valuteCurrency.textContent = ' руб.';
            valuteCurrency.className = 'item__currency';
            divItem.append(valuteCurrency);
        };
    };
};

