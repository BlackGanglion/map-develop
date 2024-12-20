/**
 * 根据经纬度范围下载任意层级的瓦片图片
 */

import TileLnglatTransform from 'tile-lnglat-transform';
import fs from 'fs';
import download from 'download';

const TileLnglatTransformGaode = TileLnglatTransform.TileLnglatTransformGaode;

const leftPoint = {
  longitude: 6.651025,
  latitude: 46.074497,
}

const rightPoint = {
  longitude: 7.158946,
  latitude: 45.682585,
}

const list = [14, 16];

for (let index = 0; index < list.length; index++) {
  const z = list[index];
  const leftResult = TileLnglatTransformGaode.lnglatToTile(leftPoint.longitude, leftPoint.latitude, z);
  const rightResult = TileLnglatTransformGaode.lnglatToTile(rightPoint.longitude, rightPoint.latitude, z);

  // console.log(z, '下载块数', (rightResult.tileX - leftResult.tileX + 1) * (rightResult.tileY - leftResult.tileY + 1));

  for (let x = leftResult.tileX; x <= rightResult.tileX; x++) {
    for (let y = leftResult.tileY; y <= rightResult.tileY; y++) {
      console.log('下载中', x, y, z);

      if (!fs.existsSync(`../data/${z}`)) {
        fs.mkdirSync(`../data/${z}`);
      }
      if (!fs.existsSync(`../data/${z}/${x}`)) {
        fs.mkdirSync(`../data/${z}/${x}`);
      }

      // await downTileData(`https://webst03.is.autonavi.com/appmaptile?style=6&x=${x}&y=${y}&z=${z}`, `../data/${z}/${x}/${y}.png`);
      await download(`https://tile.openstreetmap.org/${z}/${x}/${y}.png`, `../data/${z}/${x}`);
      // await download(`https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}`, `../data/${z}/${x}`);
    }
  }
}
