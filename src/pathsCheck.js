import fs from "fs";
import * as constants from "./constants.js";
import { WrongInputError, WrongOutputError } from "./customErrors.js";

export default function pathsCheck() {
  const inputIndex = process.argv.indexOf(constants.INPUT);
  const inputAliasIndex = process.argv.indexOf(constants.INPUT_ALIAS);
  const outputIndex = process.argv.indexOf(constants.OUTPUT);
  const outputAliasIndex = process.argv.indexOf(constants.OUTPUT_ALIAS);

  let readableStream;
  let writableStream;
  try {    
    const argIndex =
    inputAliasIndex === -1 ? inputIndex : inputAliasIndex;
    const argOutputIndex =
    outputAliasIndex === -1 ? outputIndex : outputAliasIndex;
    if (argIndex !== -1) {
      fs.stat(process.argv[argIndex + 1], function(err) {  
        if (err) {
          throw new WrongInputError();
        } 
    });
      readableStream = fs.createReadStream(process.argv[argIndex + 1], "utf-8");
    } else {
      readableStream = process.stdin;
    }

    if (argOutputIndex !== -1) {
      fs.stat(process.argv[argOutputIndex + 1], function(err) {
        if (err) {
          throw new WrongOutputError();
        } 
    });
      writableStream = fs.createWriteStream(process.argv[argOutputIndex + 1], {
        flags: 'a+',
        encoding: "utf-8",
      });
    } else {
      writableStream = process.stdout;
    }
  } catch (error) {
    process.stderr.write(error.name);
  }
  const streams = [readableStream, writableStream];

  return streams;
}
