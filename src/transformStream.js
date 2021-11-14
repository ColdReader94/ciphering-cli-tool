import { Transform } from "stream";
import { ALPHABET_LOWERCASE, ALPHABET_UPPERCASE } from "./constants.js";
import { Options } from "./options.js";
import {
  WrongOutputError,
  WrongInputError,
  WrongConfigError,
  WrongAtbashCipher,
  WrongCaeserCipher,
  WrongRot8Cipher,
} from "./customErrors.js";
import * as constants from "./constants.js";
import { exit } from "process";

function indexCheck(index) {
  if (index > ALPHABET_LOWERCASE.length) {
    return Math.abs(ALPHABET_LOWERCASE.length - index);
  }
  return index;
}

const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    try {
      let data = chunk.toString().split("");
      Options.cipher.forEach((symbol) => {
        switch (symbol[0]) {
          case constants.ATBASH:
            if (!symbol[1]) {
              Options.shift = 0;
              changeData();
            } else {
              throw new WrongAtbashCipher();
            }
            break;
          case constants.CAESER:
            if (symbol[1] === "0" || symbol[1] === "1") {
              Options.shift = symbol[1] === "0" ? -1 : 1;
              changeData();
            } else {
              throw new WrongCaeserCipher();
            }
            break;
          case constants.ROT8:
            if (symbol[1] === "0" || symbol[1] === "1") {
              Options.shift = symbol[1] === "0" ? -8 : 8;
              changeData();
            } else {
              throw new WrongRot8Cipher();
            }
            break;

          default:
            throw new WrongConfigError();
        }
      });
      function changeData() {
        data = data.map((symbol) => {
          let index = ALPHABET_LOWERCASE.findIndex((item) => item === symbol);
          let newSymbol = "";
          if (index > -1) {
            if (Options.shift === 0) {
              const reverseIndex = ALPHABET_LOWERCASE.length - index;
              return (newSymbol = ALPHABET_LOWERCASE[reverseIndex]);
            } else {
              index = indexCheck(index + Options.shift);
              return (newSymbol = ALPHABET_LOWERCASE[index]);
            }
          }
          let indexUpperCase = ALPHABET_UPPERCASE.findIndex(
            (item) => item === symbol,
          );
          if (indexUpperCase > -1) {
            if (Options.shift === 0) {
              const reverseIndex = ALPHABET_UPPERCASE.length - indexUpperCase;
              return (newSymbol = ALPHABET_UPPERCASE[reverseIndex]);
            } else {
              indexUpperCase = indexCheck(indexUpperCase + Options.shift);
              return (newSymbol = ALPHABET_UPPERCASE[indexUpperCase]);
            }
          }
          return symbol;
        });
      }
      callback(null, data.join(""));
    } catch (error) {
      process.stderr.write(error.name);
      process.exit(1);
    }
  },
});

export default transformStream;
