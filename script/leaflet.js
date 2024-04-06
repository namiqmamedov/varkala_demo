var map = L.map('mapid').setView([58.14615, 7.99573], 13);

L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png', {
    attribution: 'Carto',
}).addTo(map);

var apiKey = '07C4A129-9D26-4B3D-9BC8-B22E4B6E509E'; 
L.tileLayer.webatlas({
                mapType: L.TileLayer.Webatlas.Type.AERIAL,
                apikey: apiKey
            })//.addTo(map);

