ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [48.872185073737896, 2.354223999999991],
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([48.872185073737896, 2.354223999999991], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'location.svg',
    iconImageSize: [28, 40],
    iconImageOffset: [-3, -50]
  });

  myMap.geoObjects.add(myPlacemark);
}
