import pathsCheck from './src/pathsCheck.js';
import cliArgumentsCheck from './src/cliArgumentsCheck.js';

const streamsArr = pathsCheck();

cliArgumentsCheck(streamsArr);