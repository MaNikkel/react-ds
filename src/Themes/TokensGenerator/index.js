const axios = require('axios');
const rgbHex = require('rgb-hex');
const jsonDiff = require('json-diff');
const fs = require('fs');
const path = require('path');

const figmaApi = '148733-9e56bbb3-3def-4d30-81c7-2c4a4a0e119f';

const file = 'XRpWdyAplDIHwFE3flmCvg';

const filesDir = path.resolve(__dirname, '..', 'files')

function getPallete(figmaFile) {
  const colors = figmaFile.document.children[1].children[0].children.map(
    (color) => {
      return {
        [color.name]: `#${rgbHex(
          color.fills[0].color.r * 255,
          color.fills[0].color.g * 255,
          color.fills[0].color.b * 255,
        )}`,
      };
    },
  );
  return colors;
}

function parseFile(colors) {
  return {
    colors: colors.reduce((acc, cur) => ({ ...acc, ...cur }))
  }
}

async function getFigmaFile() {
  try {
    const result = await axios
      .get(`https://api.figma.com/v1/files/${file}`, {
        headers: {
          'X-Figma-Token': figmaApi,
        },
      })

    return result.data;

  } catch (e) {
    console.log(e);
  }
}

function manageVersion(parsedFile) {
  const stringifiedFile = JSON.stringify(parsedFile);
  fs.readdir(filesDir, (err, files) => {
    const hasLatest = files.find(f => f === 'latest.json');
    if (hasLatest) {
      fs.readFile(path.join(filesDir, 'latest.json'), (err, data) => {
        const currentFile = JSON.parse(data);
        const diff = jsonDiff.diffString(currentFile, parsedFile)
        if (diff) {
          fs.rename(path.join(filesDir, 'latest.json'), path.join(filesDir, `v${files.length}.json`), () => {
            fs.writeFileSync(path.join(filesDir, 'latest.json'), stringifiedFile)
          })
        }
      })
    } else {
      fs.writeFileSync(path.join(filesDir, 'latest.json'), stringifiedFile)
    }
  })

}

async function main() {
  try {
    const figmaFile = await getFigmaFile();
    const colors = getPallete(figmaFile);
    const parsedFile = parseFile(colors);
    manageVersion(parsedFile);
  } catch (e) {
    console.log(e);
  }
}

main();
