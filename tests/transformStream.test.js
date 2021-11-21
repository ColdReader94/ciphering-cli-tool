import { Options } from '../src/options.js';
import transformStream from '../src/transformStream';

describe('Transform stream check', () => {
  it('shift should be 0 if wrong ROT8 cipher config', () => {
    Options.cipher = 'R2';

    expect(
        transformStream
        ).toBeTruthy()

    expect(
        Options.shift
        ).toEqual(0)
      });
    

  it('shift should be 0 if wrong CAESER cipher config', () => {
    Options.cipher = 'C-2';
    expect(
        Options.shift
        ).toEqual(0)
      });
    

  it('shift should be 0 if ATBASH cipher config', () => {
    Options.cipher = 'A1';
    expect(
    Options.shift
    ).toEqual(0)
  });
});
