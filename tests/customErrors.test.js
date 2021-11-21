import { WrongConfigError, MissedConfigError, WrongInputError, WrongOutputError, WrongAtbashCipher, WrongCaeserCipher, WrongRot8Cipher} from "../src/customErrors.js"

describe('Provided config check', () => {
    it('Missed config error message check', () => {
      expect(new MissedConfigError().name).toBe('Config is not found!');
})
    
    it('Wrong config error message check', () => {
        expect(new WrongConfigError().name).toBe('Config is wrong! Check config!');
    })

      
    it('Wrong input error check', () => {
        expect(new WrongInputError().name).toBe('Wrong path for input!');
    })

    it('Wrong output error check', () => {
        expect(new WrongOutputError().name).toBe('Wrong path for output!');
    })
    
    it('Wrong Atbash argument error check', () => {
        expect(new WrongAtbashCipher().name).toBe('Atbash cipher config shouldn`t contains any other symbols after "A"');
    })

    it('Wrong Caeseargument error check', () => {
        expect(new WrongCaeserCipher().name).toBe('Caeser cipher config should contains number 0 or 1 after "C"');
    })

    it('Wrong Rot8 argument error check', () => {
        expect(new WrongRot8Cipher().name).toBe('ROT8 cipher config should contains number 0 or 1 after "R"');
    })
})