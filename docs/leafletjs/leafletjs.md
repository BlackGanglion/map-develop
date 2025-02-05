# Leaflet

## 图源

[Stamen](https://maps.stamen.com/#toner/12/37.7706/-122.3782)

[Thunderforest](https://www.thunderforest.com/terms/)

## Layers

* WMS（Web Map Service）: PNG, GIF, JPEG, vector graphics: points, lines, curves and text（SVG or WebCGM）
  - GetCapabilities: WMS 参数、available layers (map bounding box, coordinate reference systems, URI of the data and whether the layer is mostly opaque or not）
  - GetMap: map image（width and height of the map, coordinate reference system, rendering style, image format）
  - 服务端动态生成
* TMS（Tile Map Service）
  - 预处理，提前把瓦片图片都处理好
  - http://base_url/tms/1.0.0/ {tileset} / {z} / {x} / {y} .png
* WMTS（Web Map Tile Service），类似 TMS，遵循 OGC 标准，具有统一格式
* MVT（Mapbox Vector Tiles），返回 矢量瓦片（如 Protocol Buffers 格式）
* Vector Tiles，矢量瓦片
* GeoJSON，单独绘制图层

## Projections

* 地理坐标系（经纬度）
  - CGCS2000 我国当前最新坐标系
  - WGS-84 美国 GPS 坐标系（互联网不允许直接使用 WGS84 下地理数据），EPSG:4326
  - GCJ-02 首次加偏，高德、腾讯
  - BD-09 二次加偏，百度

* 投影坐标系
  - 墨卡托投影，EPSG:3395
  - 高斯投影
  - EPSG:3857: google/OSM 墨卡托坐标，伪墨卡托投影








