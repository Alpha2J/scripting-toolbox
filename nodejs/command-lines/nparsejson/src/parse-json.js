#!/usr/bin/env node
const concat = require('mississippi').concat;
const readFile = require('fs').readFile;
const yargs = require('yargs');
const argv = yargs
    .usage('parse-json [options]')
    .help('h')
    .alias('h', 'help')
    .demand('f')
    .nargs('f', 1)
    .describe('f', 'JSON file to parse')
    .argv;

const file = argv.f;

// function parse(str) {
//     console.log('in parse')
//     const value = JSON.parse(str);
//     console.log(JSON.stringify(value));
// }
//
// if (file === '-') {
//     console.log('in -')
//     // concat 会将完整的数据传给那个作为它的参数的函数
//     process.stdin.pipe(concat(parse));
// } else {
//     readFile(file, (err, dataBuffer) => {
//         if (err) {
//             throw err;
//         } else {
//             parse(dataBuffer.toString());
//         }
//     });
// }

throw new Error('error')

