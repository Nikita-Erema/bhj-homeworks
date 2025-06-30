let loader = document.querySelector('.loader');
let items = document.querySelector('#items');
let xhr = new XMLHttpRequest();
xhr.open('GET','https://students.netoservices.ru/nestjs-backend/slow-get-courses')
xhr.send();
xhr.onreadystatechange = () => {
    if(xhr.readyState === 4) {
        loader.classList.remove('loader_active');
        const coursesValute = JSON.parse(xhr.responseText).response.Valute
        console.log(coursesValute);
        for (const key in coursesValute) {
            console.log(coursesValute[key]);
            items.insertAdjacentHTML('beforeend', `
                <div class="item">
                <div class="item__code">
                        ${coursesValute[key].CharCode}
                    </div>
                    <div class="item__value">
                        ${coursesValute[key].Value}
                    </div>
                    <div class="item__currency">
                        руб.
                    </div></div>`);
        }
    }
}