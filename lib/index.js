const getInput = require('./input');
const SvgWriter = require('./SvgWriter');

async function main() {
  const input = await getInput();
  const writer = new SvgWriter(
    input.text,
    input.textColor,
    input.shape,
    input.shapeColor
  );
  writer.write();
}

main();