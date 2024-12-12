/**
 * 根据层级下载整个图层的瓦片
 */

import fs from 'fs';
import download from 'download';

const z = 4;
const count = Math.pow(2, z);

for (let x = 0; x < count / 2; x++) {
  for (let y = 0; y < count / 2; y++) {
    console.log('下载中', x, y, z);

    if (!fs.existsSync(`../data/${z}`)) {
      fs.mkdirSync(`../data/${z}`);
    }
    if (!fs.existsSync(`../data/${z}/${x}`)) {
      fs.mkdirSync(`../data/${z}/${x}`);
    }

    // await downTileData(`https://webst03.is.autonavi.com/appmaptile?style=6&x=${x}&y=${y}&z=${z}`, `../data/${z}/${x}/${y}.png`);
    await download(`https://tile.openstreetmap.org/${z}/${x}/${y}.png`, `../data/${z}/${x}`);
  }
}
