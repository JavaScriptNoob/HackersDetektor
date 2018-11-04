ymaps.ready(init);
function init(){ 
    // Создание карты.    
    var myMap = new ymaps.Map("map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [56.058324, 12.883113],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 13, 
        controls: ['zoomControl', 'searchControl', 'typeSelector','geolocationControl','rulerControl']
    
       
    });
    var myPlacemark1 = new ymaps.Placemark([46.34965963, 48.04411248], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'styles/22.svg',
        iconImageSize: [40, 52],
        iconImageOffset: [-3, -42],
        balloonContentHeader: '<h2>Казанский федеральный университет</h2>',
        balloonContentBody: '<em>Здесь учатся многие, а мы просто делаем сайты =)</em>'  
        
    });
    var myPlacemark2 = new ymaps.Placemark([54.85763293, 83.10923569], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'styles/graduation-hat.svg',
        iconImageSize: [40, 52],
        iconImageOffset: [-3, -42]
    });
    var myPlacemark3 = new ymaps.Placemark([56.04273856, 12.69599991], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'styles/sweden.svg',
        iconImageSize: [32, 32],
        iconImageOffset: [-3, -22]
    });
    var myPlacemark4 = new ymaps.Placemark([51.53087837, 87.70375732], {balloonContentHeader: "JAG VET INTE ,VAD ÄR DET",
    balloonContentBody: "PÅ RIKTIGT",
    balloonContentFooter: "USCH",
    hintContent: "yandex hint"
}, {
        iconLayout: 'default#image',
        iconImageHref: 'styles/destination.svg',
        iconImageSize: [32, 32],
        iconImageOffset: [-3, -22]
    });
    myMap.geoObjects.add(myPlacemark1);
    myMap.geoObjects.add(myPlacemark2);
    myMap.geoObjects.add(myPlacemark3);
    myMap.geoObjects.add(myPlacemark4);
    myMap.balloon.open([51.71845680, 87.65062378], "TELETCKOOE LAKE", {
        // Опция: не показываем кнопку закрытия.
        closeButton: false
    });

   
}
