# Mapbox

## Static Maps
请求一张纯静态的地图图片

```
https://api.mapbox.com/styles/v1/{username}/{style_id}/static/{overlay}/{lon},{lat},{zoom},{bearing},{pitch}|{bbox}|{auto}/{width}x{height}{@2x}
```

* overlay: 可以叠加图层，geojson/marker/path，存在矢量图层会保存为 png，只有栅格图层会保存为 jpeg
* bearing: 方位角
* pitch: 倾斜度数
* @2x: 两倍图
* style 参数
  - addlayer，要熟悉 layer 的语法
  - filter，要熟悉 filter 的语法

## tileset

瓦片集合分为矢量和栅格

* Raster tilesets: raster images (TIFF or GeoTIFF files) 
* Vector tilesets: vector data (GeoJSON, Shapefile, KML, or GPX files)，需要熟悉[矢量瓦片](https://github.com/mapbox/vector-tile-spec?tab=readme-ov-file)定义

### zoom level

0-22，一共 23 个层级，Mapbox GL 默认使用 512x512 像素的瓦片，一般通常采用 256x256，Mapbox 只有在 Raster Tiles API 中采用 256x256

不同纬度会产生不同的拉伸效果，因此每个像素代表的距离也不同

### Pixel density

像素密度，PPI（Pixels Per Inch，每英寸的像素数）。像素密度越高，图像就越细腻，显示效果越清晰。关注图片像素与屏幕像素的关系


## 语法集合

* [source](https://docs.mapbox.com/style-spec/reference/sources/)
* [layer](https://docs.mapbox.com/style-spec/reference/layers/)
* [expression](https://docs.mapbox.com/style-spec/reference/expressions/)

