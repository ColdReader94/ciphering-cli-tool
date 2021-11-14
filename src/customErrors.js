export class WrongConfigError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Config is wrong! Check config!'
    }
}

export class MissedConfigError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Config is not found!'
    }
}


export class WrongInputError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Wrong path for input!'
    }
}

export class WrongOutputError extends Error {
    constructor(message) {
        super(message);
        this.name = 'Wrong path for output!';
    }
}

export class WrongAtbashCipher extends Error {
    constructor(message) {
        super(message);
        this.name = 'Atbash cipher config shouldn`t contains any other symbols after "A"';
    }
}

export class WrongCaeserCipher extends Error {
    constructor(message) {
        super(message);
        this.name = 'Caeser cipher config should contains number 0 or 1 after "C"';
    }
}

export class WrongRot8Cipher extends Error {
    constructor(message) {
        super(message);
        this.name = 'ROT8 cipher config should contains number 0 or 1 after "R"';
    }
}