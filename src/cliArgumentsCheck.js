import * as constants from "./constants.js";
import transformStream from "./transformStream.js";
import pathsCheck from "./pathscheck.js";
import { Options } from "./options.js";
import { MissedConfigError, WrongConfigError } from "./customErrors.js";

export default function cliArgumentsCheck() {
  const configIndex = process.argv.indexOf(constants.CONFIG);
  const configAliasIndex = process.argv.indexOf(constants.CONFIG_ALIAS);

  const [readStream, writeStream] = pathsCheck();

  if (arguments[0]) {
    try {
      if (configIndex !== -1) {
        Options.cipher = process.argv[configIndex + 1];
      }
      if (configAliasIndex !== -1) {
        Options.cipher = process.argv[configAliasIndex + 1];
      } else {
        throw new MissedConfigError();
      }
      if (!constants.LAYOUT.test(Options.cipher)) {
        throw new WrongConfigError();
      }
    } catch (error) {
      process.stderr.write(error.name);
    }

    Options.cipher = Options.cipher.split('-');

    readStream
      .on('error', (error) => {
        process.stderr.write(error.name);
        process.exit(1);
      })
      .pipe(transformStream)
       .on('error', (error) => {
        process.stderr.write(error.name);
        process.exit(1);
      })
      .pipe(writeStream)
       .on('error', (error) => {
        process.stderr.write(error.name);
      });
  }
}
