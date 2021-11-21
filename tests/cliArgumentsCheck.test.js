import cliArgumentsCheck from '../src/cliArgumentsCheck.js';

describe('Provided config check', () => {
  beforeEach(() => {
    process.argv = [
      'node',
      'index.js',
      'A-C1',
      '-i',
      'input.txt',
      '-o',
      'output.txt',
    ];
  });

  it('should throw missed config error if no -c or --config flags is not provided', () => {
    process.argv = [
      'node',
      'index.js',
      'A-C1',
      '-i',
      'input.txt',
      '-o',
      'output.txt',
    ];
    expect(() => cliArgumentsCheck()).toThrowError('Config is not found!');
  });

  it('should throw missed config error if config argument is not provided', () => {
    process.argv = [
      'node',
      'index.js',
      '-c',
      '-i',
      'input.txt',
      '-o',
      'output.txt',
    ];
    expect(() => cliArgumentsCheck()).toThrowError(
      'Config is wrong! Check config!'
    );
  });

  it('should throw wrong config value error if config argument is not passed', () => {
    process.argv = [
      'node',
      'index.js',
      '--config',
      'degdffgdf',
      '-i',
      'input.txt',
      '-o',
      'output.txt',
    ];
    expect(() => cliArgumentsCheck()).toThrowError(
      'Config is wrong! Check config!'
    );
  });

  it('should be ok if config argument is right', () => {
    process.argv = [
      'node',
      'index.js',
      '--config',
      'A-C1-R0',
      '-i',
      'input.txt',
      '-o',
      'output.txt',
    ];
    expect(() => cliArgumentsCheck()).toBeTruthy();
  });
});
