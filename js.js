let offset = 0;
const slider = document.querySelector('.image_container_scrolling');

//ищем элементы для изменения текста
const city = document.getElementById('city');
const apartment = document.getElementById('apartment');
const time = document.getElementById('time');
const cost = document.getElementById('cost');

const circle1 = document.querySelector('.circle1');
const circle2 = document.querySelector('.circle2');
const circle3 = document.querySelector('.circle3');

//кнопка вперед
document.querySelector('.switch-next').addEventListener('click', function(){
    offset += 679;
    if (offset > 1358){     //передвигаем картинки
        offset = 0;
    }
    slider.style.left = -offset + 'px';

    //изменяем текст
    if(offset == 679){
        city.innerHTML = 'Sochi Thieves';
        apartment.innerHTML = '105 m2';
        time.innerHTML = '4 months';
        circle1.style.display = 'none';
        circle3.style.display = 'none';
        circle2.style.display = 'block';
    }
    else if (offset == 1358){
        city.innerHTML = 'Rostov-on-Don Patriotic';
        apartment.innerHTML = '93 m2';
        time.innerHTML = '3 months';
        circle1.style.display = 'none';
        circle2.style.display = 'none';
        circle3.style.display = 'block';
    }
    else if (offset == 0){
        city.innerHTML = 'Rostov-on-Don LCD admiral';
        apartment.innerHTML = '81 m2';
        time.innerHTML = '3,5 months';
        circle2.style.display = 'none';
        circle3.style.display = 'none';
        circle1.style.display = 'block';
    }
});

//кнопка назад
document.querySelector('.switch-prev').addEventListener('click', function(){
    offset -= 679;
    if (offset < 0){
        offset = 1358;
    }
    slider.style.left = -offset + 'px';

    if(offset == 679){
        city.innerHTML = 'Sochi Thieves';
        apartment.innerHTML = '105 m2';
        time.innerHTML = '4 months';

        circle1.style.display = 'none';
        circle3.style.display = 'none';
        circle2.style.display = 'block';
    }
    else if (offset == 1358){
        city.innerHTML = 'Rostov-on-Don Patriotic';
        apartment.innerHTML = '93 m2';
        time.innerHTML = '3 months';

        circle1.style.display = 'none';
        circle2.style.display = 'none';
        circle3.style.display = 'block';
    }
    else if (offset == 0){
        city.innerHTML = 'Rostov-on-Don LCD admiral';
        apartment.innerHTML = '81 m2';
        time.innerHTML = '3,5 months';

        circle2.style.display = 'none';
        circle3.style.display = 'none';
        circle1.style.display = 'block';
    }
});


