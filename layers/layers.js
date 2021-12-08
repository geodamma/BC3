ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:3825").setExtent([179821.929501, 2702637.792636, 181810.649758, 2703763.968009]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_1975_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "1975年",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/1975_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [13170261.546233, 2805721.072196, 13171773.767806, 2806912.362460]
                            })
                        });
var format__big5_2 = new ol.format.GeoJSON();
var features__big5_2 = format__big5_2.readFeatures(json__big5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3825'});
var jsonSource__big5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__big5_2.addFeatures(features__big5_2);
var lyr__big5_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__big5_2, 
                style: style__big5_2,
                interactive: true,
                title: '<img src="styles/legend/_big5_2.png" /> 建築物_big5'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_1975_1.setVisible(true);lyr__big5_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_1975_1,lyr__big5_2];
lyr__big5_2.set('fieldAliases', {'Build_STR': 'Build_STR', 'Build_NO': 'Build_NO', });
lyr__big5_2.set('fieldImages', {'Build_STR': 'TextEdit', 'Build_NO': 'TextEdit', });
lyr__big5_2.set('fieldLabels', {'Build_STR': 'inline label', 'Build_NO': 'inline label', });
lyr__big5_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});