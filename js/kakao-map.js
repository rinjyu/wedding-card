let mapContainer = document.getElementById("map"),
                    mapOption = {
                        center: new kakao.maps.LatLng(37.5614086, 127.0384812),
                        level: 3
                    };
let map = new kakao.maps.Map(mapContainer, mapOption);
mapContainer.style.width = "100%";
mapContainer.style.height = "350px";
mapContainer.style.overflow = "hidden";
map.relayout();

let geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch("서울 성동구 왕십리광장로 17 민자역사 6층", function(result, status) {
    if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        let marker = new kakao.maps.Marker({
                                map: map, position: coords
                            });
        let infowindow = new kakao.maps.InfoWindow({
                                content: '<div style="width:150px; text-align:center; padding:6px 0;">디노체컨벤션웨딩홀</div>'
                            });
        infowindow.open(map, marker);
        map.setCenter(coords);
    }
});