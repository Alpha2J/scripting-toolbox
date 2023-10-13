const readFile = require('fs').readFile;
const yargs = require('yargs');

const argv = yargs
    .usage('parse-json [options]')
    // 需要-f参数才能运行
    .demand('f')
    // 告诉yargs -f后面要有参数值,及参数值的个数
    .nargs('f', 2)
    .demand('k')
    // 参数值的描述
    .describe('f', 'json file to parse')
    .help('h')
    // .alias('h', 'j')
    // 一个字母就是当杠，两个字母以上就是双横杠
    .alias('h', 'help')
    .argv;
console.log(argv)

