import fs from 'fs';
import request from 'request';

const z = 6;
const count = Math.pow(2, z + 1);

async function downTileData(url, dist) {
  return new Promise(function (reslove, reject) {
    request.head(url, (err, res, body) => {
      if (err) { reject(err); }
      url && request(url).pipe(fs.createWriteStream(dist)).on('close', () => {
        reslove();
      })
    })
  });

}

for (let x = 0; x < count / 2; x++) {
  for (let y = 0; y < count / 2; y++) {
    console.log('下载中', x, y, z);

    if (!fs.existsSync(`../data/${z}`)) {
      fs.mkdirSync(`../data/${z}`);
    }
    if (!fs.existsSync(`../data/${z}/${x}`)) {
      fs.mkdirSync(`../data/${z}/${x}`);
    }

    await downTileData(`https://webst03.is.autonavi.com/appmaptile?style=6&x=${x}&y=${y}&z=${z}`, `../data/${z}/${x}/${y}.png`);
  }
}